import { Module } from '@nestjs/common';
import { RandomstatisticsService } from '../services/randomstatistics/randomstatistics.service';
import { RandomstatisticsController } from '../controller/randomstatistics/randomstatistics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Randomstatistics } from '../entities/randomstatistics.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Randomstatistics])],
  controllers: [RandomstatisticsController],
  providers: [RandomstatisticsService]
})

export class RandomstatisticsModule {}
