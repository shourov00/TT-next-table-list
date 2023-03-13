import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivitySeedService } from './activity-seed.service';
import { Activity } from '@modules/activities/entities/activity.entity';
import { Division } from '@modules/activities/entities/division.entity';
import { Classe } from '@modules/activities/entities/classe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Activity, Division, Classe])],
  providers: [ActivitySeedService],
  exports: [ActivitySeedService],
})
export class ActivitySeedModule {}
