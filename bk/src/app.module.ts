import * as path from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DATABASE } from './shared/constants/global.constants';
import { ActivitiesModule } from '@modules/activities/activities.module';

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
    ActivitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
