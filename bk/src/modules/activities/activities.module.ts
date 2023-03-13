import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { ActivitiesController } from '@modules/activities/activities.controller';
import { ActivitiesService } from '@modules/activities/activities.service';
import { Classe } from '@modules/activities/entities/classe.entity';
import { Division } from '@modules/activities/entities/division.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Activity, Classe, Division])],
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
  exports: [ActivitiesService],
})
export class ActivitiesModule {}
