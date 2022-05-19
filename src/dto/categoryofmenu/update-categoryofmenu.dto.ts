import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryofmenuDto } from './create-categoryofmenu.dto';

export class UpdateCategoryofmenuDto extends PartialType(CreateCategoryofmenuDto) {}
