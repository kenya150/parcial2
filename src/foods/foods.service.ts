/* eslint-disable */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from './entities/food.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FoodsService {
  constructor(
    @InjectRepository(Food)
    private foodRepository: Repository<Food>,
  ){}

  async create(CreateFoodDto: CreateFoodDto) {
    const food = this.foodRepository.create(CreateFoodDto);
    return await this.foodRepository.save(food);
  }

  async findAll() {
    const foods = await this.foodRepository.find();
    return foods;
  }

  async findOne(id: number) {
    const food = await this.foodRepository.findOneBy({id});
    if(!food) {
      throw new NotFoundException(`No se encontro la comida con el ID ${id} proporcionado`);
    }
    return food;
  }

  update(id: number, updateFoodDto: UpdateFoodDto) {
    return `This action updates a #${id} food`;
  }

  async remove(id: number) {
    const food = await this.foodRepository.findOneBy({id});
    if(!food) {
      throw new NotFoundException(`No se encontro la comida con el ID ${id} proporcionado`);
    }
    await this.foodRepository.delete(id);
    return {message: 'comida con el id:${id} eliminada exitosamente'};
  }
}
