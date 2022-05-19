import { Test, TestingModule } from '@nestjs/testing';
import { CategoryofmenuService } from './categoryofmenu.service';

describe('CategoryofmenuService', () => {
  let service: CategoryofmenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryofmenuService],
    }).compile();

    service = module.get<CategoryofmenuService>(CategoryofmenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
