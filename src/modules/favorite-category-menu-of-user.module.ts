import { Module } from '@nestjs/common';
import { FavoriteCategoryMenuOfUserService } from '../services/favoriteCategoryMenuOfUser/favorite-category-menu-of-user.service';
import { FavoriteCategoryMenuOfUserController } from '../controller/favoriteCategoryMenuOfUser/favorite-category-menu-of-user.controller';

@Module({
  controllers: [FavoriteCategoryMenuOfUserController],
  providers: [FavoriteCategoryMenuOfUserService]
})
export class FavoriteCategoryMenuOfUserModule {}
