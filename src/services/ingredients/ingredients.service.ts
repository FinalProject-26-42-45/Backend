import { Injectable } from '@nestjs/common';
import { CreateIngredientsDto } from '../../dto/ingredients/create-ingredient.dto';
import { UpdateIngredientsDto } from '../../dto/ingredients/update-ingredient.dto';

@Injectable()
export class IngredientsService {
  create(createIngredientDto: CreateIngredientsDto) {
    return 'This action adds a new ingredient';
  }

  findAll() {
    return `This action returns all ingredients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredient`;
  }

  update(id: number, updateIngredientDto: UpdateIngredientsDto) {
    return `This action updates a #${id} ingredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredient`;
  }
}
