import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { Menu } from './entities/menu.entity';
import { MenuService } from './menu.service';
// import { CreateMenuDto } from './dto/create-menu.dto';
// import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('menu')
export class MenuController {

  constructor(private menuService: MenuService) {}

  @Get()
  async findAll() {
      return await this.menuService.findAll()
  }
  
  @Get(":MenuId")
  async findOne(@Param() MenuId: number) {
      return await this.menuService.findOne(MenuId)
  }

  @Post()
  async create(@Body() createMenuDto: Menu) {
      return await this.menuService.create(createMenuDto)
  }

  @Put(":MenuId")
  async update(@Param() MenuId: number, @Body() createMenuDto: Menu) {
      return this.menuService.update(MenuId, createMenuDto)
  }

  @Delete()
  async delete(@Body() MenuId: number) {
      return this.menuService.remove(MenuId)
  }
}
