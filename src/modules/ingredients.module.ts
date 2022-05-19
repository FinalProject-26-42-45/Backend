import { Module } from '@nestjs/common';
import { IngredientsService } from '../services/ingredients/ingredients.service';
import { IngredientsController } from '../controller/ingredients/ingredients.controller';

@Module({
  controllers: [IngredientsController],
  providers: [IngredientsService]
})
export class IngredientsModule {}
