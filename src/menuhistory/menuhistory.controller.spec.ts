import { Test, TestingModule } from '@nestjs/testing';
import { MenuhistoryController } from './menuhistory.controller';
import { MenuhistoryService } from './menuhistory.service';

describe('MenuhistoryController', () => {
  let controller: MenuhistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuhistoryController],
      providers: [MenuhistoryService],
    }).compile();

    controller = module.get<MenuhistoryController>(MenuhistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
