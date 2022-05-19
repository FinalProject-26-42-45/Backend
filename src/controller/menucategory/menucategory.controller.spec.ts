import { Test, TestingModule } from '@nestjs/testing';
import { MenucategoryController } from './menucategory.controller';
import { MenucategoryService } from '../../services/menucategory/menucategory.service';

describe('MenucategoryController', () => {
  let controller: MenucategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenucategoryController],
      providers: [MenucategoryService],
    }).compile();

    controller = module.get<MenucategoryController>(MenucategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
