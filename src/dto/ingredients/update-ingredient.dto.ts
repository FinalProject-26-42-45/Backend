import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredientsDto } from './create-ingredient.dto';

export class UpdateIngredientsDto extends PartialType(CreateIngredientsDto) {}
