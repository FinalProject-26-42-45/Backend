import { Test, TestingModule } from '@nestjs/testing';
import { RandomstatisticsService } from './randomstatistics.service';

describe('RandomstatisticsService', () => {
  let service: RandomstatisticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RandomstatisticsService],
    }).compile();

    service = module.get<RandomstatisticsService>(RandomstatisticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
