import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RandomstatisticsService } from '../../services/randomstatistics/randomstatistics.service';
import { CreateRandomstatisticDto } from '../../dto/randomstatistics/create-randomstatistic.dto';
import { UpdateRandomstatisticDto } from '../../dto/randomstatistics/update-randomstatistic.dto';

@Controller('randomstatistics')
export class RandomstatisticsController {
  constructor(private readonly randomstatisticsService: RandomstatisticsService) {}

  @Post()
  create(@Body() createRandomstatisticDto: CreateRandomstatisticDto) {
    return this.randomstatisticsService.create(createRandomstatisticDto);
  }

  @Get()
  findAll() {
    return this.randomstatisticsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.randomstatisticsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRandomstatisticDto: UpdateRandomstatisticDto) {
    return this.randomstatisticsService.update(+id, updateRandomstatisticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.randomstatisticsService.remove(+id);
  }
}
