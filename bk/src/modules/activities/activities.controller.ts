import { Controller, Get, HttpStatus, HttpCode } from '@nestjs/common';
import { ActivitiesService } from './activities.service';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return this.activitiesService.search();
  }
}
