import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenModule } from './token/token.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://docker:mongopw@localhost:55000'),
    TokenModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
