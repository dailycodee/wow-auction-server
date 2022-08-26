import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenModule } from './token/token.module';
import { ConfigModule } from '@nestjs/config';
import { RealmModule } from './realm/realm.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    TokenModule,
    RealmModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
