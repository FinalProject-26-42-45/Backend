import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MenuhistoryService } from './menuhistory.service';
import { CreateMenuhistoryDto } from './dto/create-menuhistory.dto';
import { UpdateMenuhistoryDto } from './dto/update-menuhistory.dto';
import { Menuhistory } from './entities/menuhistory.entity';

@Controller('menuhistory')
export class MenuhistoryController {
  constructor(private menuhistoryService: MenuhistoryService) {}

  @Get()
  async findAll() {
    return await this.menuhistoryService.findAll();
  }

  @Get(':HistoryId')
  async findOne(@Param() HistoryId: number) {
    return await this.menuhistoryService.findOne(HistoryId);
  }

  @Post()
  async create(@Body() createUserDto: Menuhistory) {
    return await this.menuhistoryService.create(createUserDto);
  }

  @Delete()
  async delete(@Body() HistoryId: number) {
    return this.menuhistoryService.remove(HistoryId);
  }
}
