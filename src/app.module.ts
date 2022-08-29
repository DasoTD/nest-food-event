import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodMenuModule } from './food-menu/food-menu.module';
import {FoodMenu} from './food-menu/entities/food-menu.entity'
import {EventEmitterModule } from '@nestjs/event-emitter' //new
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.PORT),
      database: process.env.DB_NAME, // the name of the database
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [FoodMenu],
      synchronize: true
    }),
    EventEmitterModule.forRoot(),
    FoodMenuModule,
    NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
