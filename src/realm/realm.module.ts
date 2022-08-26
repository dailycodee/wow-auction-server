import { Module } from '@nestjs/common';
import { RealmService } from './realm.service';
import { RealmController } from './realm.controller';
import { HttpModule } from '@nestjs/axios';
import { TokenModule } from '../token/token.module';
import { TokenService } from '../token/token.service';

@Module({
  imports: [HttpModule, TokenModule],
  controllers: [RealmController],
  providers: [RealmService, TokenService],
})
export class RealmModule {}
