import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteCategoryMenuOfUserService } from './favorite-category-menu-of-user.service';

describe('FavoriteCategoryMenuOfUserService', () => {
  let service: FavoriteCategoryMenuOfUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteCategoryMenuOfUserService],
    }).compile();

    service = module.get<FavoriteCategoryMenuOfUserService>(FavoriteCategoryMenuOfUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
