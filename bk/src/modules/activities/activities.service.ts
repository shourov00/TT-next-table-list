import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './entities/activity.entity';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async search() {
    return this.activityRepository
      .find({
        relations: ['divisions', 'divisions.classes'],
      })
      .catch((err) => {
        throw new InternalServerErrorException(err.message);
      });
  }
}
