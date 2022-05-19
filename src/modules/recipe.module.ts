import { Module } from '@nestjs/common';
import { RecipeService } from '../services/recipe/recipe.service';
import { RecipeController } from '../controller/recipe/recipe.controller';

@Module({
  controllers: [RecipeController],
  providers: [RecipeService]
})
export class RecipeModule {}
