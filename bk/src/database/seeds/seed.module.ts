import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE } from '@shared/constants/global.constants';
import { ActivitySeedModule } from './activites/activity-seed.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DATABASE.HOST,
      port: DATABASE.PORT,
      username: DATABASE.USER,
      password: DATABASE.PASSWORD,
      database: DATABASE.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ActivitySeedModule,
  ],
})
export class SeedModule {}
