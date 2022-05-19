import { Test, TestingModule } from '@nestjs/testing';
import { MenuhistoryService } from './menuhistory.service';

describe('MenuhistoryService', () => {
  let service: MenuhistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuhistoryService],
    }).compile();

    service = module.get<MenuhistoryService>(MenuhistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
