import { Controller, Get, Query } from '@nestjs/common';
import { RealmService } from './realm.service';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RealmModel } from './models/realm.model';
import { LOCALE_ARRAY } from '../config/constants';

@ApiTags('realm')
@Controller('realm')
export class RealmController {
  constructor(private readonly realmService: RealmService) {}

  @ApiResponse({
    type: RealmModel,
  })
  @ApiQuery({
    name: 'locale',
    type: String,
    enum: LOCALE_ARRAY,
  })
  @Get()
  async getAllRealms(@Query('locale') locale: string): Promise<RealmModel> {
    return this.realmService.getAllRealms(locale);
  }
}
