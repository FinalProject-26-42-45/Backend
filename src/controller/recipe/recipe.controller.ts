import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipeService } from '../../services/recipe/recipe.service';
import { CreateRecipeDto } from '../../dto/recipe/create-recipe.dto';
import { UpdateRecipeDto } from '../../dto/recipe/update-recipe.dto';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  async findAll() {
      return await this.recipeService.findAll()
  }
}
