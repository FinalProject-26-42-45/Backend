import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteCategoryMenuOfUserController } from './favorite-category-menu-of-user.controller';
import { FavoriteCategoryMenuOfUserService } from './favorite-category-menu-of-user.service';

describe('FavoriteCategoryMenuOfUserController', () => {
  let controller: FavoriteCategoryMenuOfUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteCategoryMenuOfUserController],
      providers: [FavoriteCategoryMenuOfUserService],
    }).compile();

    controller = module.get<FavoriteCategoryMenuOfUserController>(FavoriteCategoryMenuOfUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
