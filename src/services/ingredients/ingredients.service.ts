import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredients } from 'src/entities/ingredients.entity';
import { Repository } from 'typeorm';


@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredients)
    private ingredientsRepository: Repository<Ingredients>,
  ) { }

  findAll(): Promise<Ingredients[]> {
    return this.ingredientsRepository.find();
  }


}
