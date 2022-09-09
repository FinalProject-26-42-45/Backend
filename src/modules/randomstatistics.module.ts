import { Module } from '@nestjs/common';
import { RandomstatisticsService } from '../services/randomstatistics/randomstatistics.service';
import { RandomstatisticsController } from '../controller/randomstatistics/randomstatistics.controller';

@Module({
  controllers: [RandomstatisticsController],
  providers: [RandomstatisticsService]
})
export class RandomstatisticsModule {}
