import { Test, TestingModule } from '@nestjs/testing';
import { MenucategoryService } from './menucategory.service';

describe('MenucategoryService', () => {
  let service: MenucategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenucategoryService],
    }).compile();

    service = module.get<MenucategoryService>(MenucategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
