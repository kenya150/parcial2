/* eslint-disable */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodsModule } from './foods/foods.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [FoodsModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: '',
    database: 'proyecto2',
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
