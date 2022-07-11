import { Test, TestingModule } from '@nestjs/testing';
import { RandomstatisticsController } from './randomstatistics.controller';
import { RandomstatisticsService } from '../../services/randomstatistics/randomstatistics.service';

describe('RandomstatisticsController', () => {
  let controller: RandomstatisticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomstatisticsController],
      providers: [RandomstatisticsService],
    }).compile();

    controller = module.get<RandomstatisticsController>(RandomstatisticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
