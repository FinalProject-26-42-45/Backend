import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RandomstatisticsService } from '../../services/randomstatistics/randomstatistics.service';


@Controller('randomstatistics')
export class RandomstatisticsController {
  constructor(private readonly randomstatisticsService: RandomstatisticsService) {}

  @Get()
  async getStat(){
    return this.randomstatisticsService.showStat()
  }

  @Post()
  async static(@Body() MenuId: number){
    this.randomstatisticsService.addStat(MenuId)
  }
}
