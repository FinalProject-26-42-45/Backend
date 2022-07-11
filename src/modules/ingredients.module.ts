import { Module } from '@nestjs/common';
import { IngredientsService } from '../services/ingredients/ingredients.service';
import { IngredientsController } from '../controller/ingredients/ingredients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredients } from 'src/entities/ingredients.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredients])],
  controllers: [IngredientsController],
  providers: [IngredientsService]
})
export class IngredientsModule {}
