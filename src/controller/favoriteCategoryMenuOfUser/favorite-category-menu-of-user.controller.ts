import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoriteCategoryMenuOfUserService } from '../../services/favoriteCategoryMenuOfUser/favorite-category-menu-of-user.service';
import { UpdateFavoriteCategoryMenuOfUserDto } from '../../dto/favoriteCategoryMenuOfUser/update-favorite-category-menu-of-user.dto';

@Controller('favorite-category-menu-of-user')
export class FavoriteCategoryMenuOfUserController {
  constructor(private readonly favoriteCategoryMenuOfUserService: FavoriteCategoryMenuOfUserService) {}

}
