import { Test, TestingModule } from '@nestjs/testing';
import { CategoryofmenuController } from './categoryofmenu.controller';
import { CategoryofmenuService } from '../../services/categoryofmenu/categoryofmenu.service';

describe('CategoryofmenuController', () => {
  let controller: CategoryofmenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryofmenuController],
      providers: [CategoryofmenuService],
    }).compile();

    controller = module.get<CategoryofmenuController>(CategoryofmenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
