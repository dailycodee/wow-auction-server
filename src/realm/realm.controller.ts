import { Controller, Get, Query } from '@nestjs/common';
import { RealmService } from './realm.service';

@Controller('realm')
export class RealmController {
  constructor(private readonly realmService: RealmService) {}

  @Get()
  async getAllRealms(@Query('locale') locale: string) {
    return this.realmService.getAllRealms(locale);
  }
}
