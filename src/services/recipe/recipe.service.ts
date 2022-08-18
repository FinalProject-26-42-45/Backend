import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from 'src/entities/recipe.entity';
import { Repository } from 'typeorm';
import { CreateRecipeDto } from '../../dto/recipe/create-recipe.dto';
import { UpdateRecipeDto } from '../../dto/recipe/update-recipe.dto';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>,
  ) { }

  findAll(): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }
}
