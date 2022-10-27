import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoriteCategoryMenuOfUserDto } from './create-favorite-category-menu-of-user.dto';

export class UpdateFavoriteCategoryMenuOfUserDto extends PartialType(CreateFavoriteCategoryMenuOfUserDto) {}
