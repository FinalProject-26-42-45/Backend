import { Module } from '@nestjs/common';
import { RecipeService } from '../services/recipe/recipe.service';
import { RecipeController } from '../controller/recipe/recipe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from 'src/entities/recipe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  controllers: [RecipeController],
  providers: [RecipeService]
})
export class RecipeModule {}
