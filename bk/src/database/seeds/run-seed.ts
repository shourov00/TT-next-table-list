import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { ActivitySeedService } from './activites/activity-seed.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  await app.get(ActivitySeedService).run();

  await app.close();
};

void runSeed();
