import { Injectable } from '@nestjs/common';
import { CreateFoodMenuDto } from './dto/create-food-menu.dto';
import { UpdateFoodMenuDto } from './dto/update-food-menu.dto';
import {NewMealEvent} from '../events/new.meal.event' //new
import { EventEmitter2 } from '@nestjs/event-emitter';
import { FoodMenu } from './entities/food-menu.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FoodMenuService {
  constructor(
    @InjectRepository(FoodMenu) private foodRepo: Repository<FoodMenu>,
    private eventEmitter: EventEmitter2
) {}

async createMenuItem (createFoodMenuDto: CreateFoodMenuDto): Promise<FoodMenu> {
  const {name, price} = createFoodMenuDto;
  const food = this.foodRepo.create({name, price})
  await this.foodRepo.save(food)
  this.eventEmitter.emit('new.meal', 
    new NewMealEvent(food.name)
  ) //new
  return food
}
async getMenuItems () {
  return this.foodRepo.find()
}

  create(createFoodMenuDto: CreateFoodMenuDto) {
    return 'This action adds a new foodMenu';
  }

  findAll() {
    return `This action returns all foodMenu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodMenu`;
  }

  update(id: number, updateFoodMenuDto: UpdateFoodMenuDto) {
    return `This action updates a #${id} foodMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodMenu`;
  }
}
