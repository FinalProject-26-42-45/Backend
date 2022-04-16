import { PartialType } from '@nestjs/mapped-types';
import { CreateMenucategoryDto } from './create-menucategory.dto';

export class UpdateMenucategoryDto extends PartialType(CreateMenucategoryDto) {}
