import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { CONFIG } from '@shared/constants/global.constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.setGlobalPrefix(CONFIG.API_PREFIX);

  app.use(express.static('public'));

  await app.listen(CONFIG.PORT).then(() => {
    console.log(`API server started on port ${CONFIG.PORT}`);
  });
}
bootstrap();
