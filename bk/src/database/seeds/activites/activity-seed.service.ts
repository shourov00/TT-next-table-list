import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from '@modules/activities/entities/activity.entity';
import { Division } from '@modules/activities/entities/division.entity';
import { Classe } from '@modules/activities/entities/classe.entity';
import * as XLSX from 'xlsx';
import { WorkSheet } from 'xlsx';

@Injectable()
export class ActivitySeedService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
    @InjectRepository(Division)
    private divisionRepository: Repository<Division>,
    @InjectRepository(Classe)
    private classeRepository: Repository<Classe>,
  ) {}

  async run() {
    await this.seedData();
  }

  private static toCapitalize(value: string) {
    if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    return '';
  }

  private async seedData() {
    const xlsxData = XLSX.readFile(__dirname + '/Activities.xlsx');
    const sheet: WorkSheet = xlsxData.Sheets['NAF_N'];

    const data = XLSX.utils.sheet_to_json(sheet);

    const classEntities = [];

    let activity_id;
    let division_id;
    for (const item of data) {
      if (item['Level'] === 1) {
        const activity = this.activityRepository.create({
          code: item['Code'],
          name: ActivitySeedService.toCapitalize(item['Activité']),
        });

        await activity.save();

        activity_id = activity.id;
      }

      if (item['Level'] === 2 && activity_id) {
        const division = this.divisionRepository.create({
          code: item['Code'],
          name: item['Division'],
          activity: activity_id,
        });

        await division.save();

        division_id = division.id;
      }

      if (item['Level'] === 3 && division_id) {
        const classe = this.classeRepository.create({
          code: item['Code'],
          name: item['Classe'],
          division: division_id,
        });

        classEntities.push(classe);
      }
    }

    await this.classeRepository.save(classEntities);
  }
}
