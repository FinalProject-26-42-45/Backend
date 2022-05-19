import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Menucategory } from '../../entities/menucategory.entity';
import { MenucategoryService } from '../../services/menucategory/menucategory.service';


@Controller('menucategory')
export class MenucategoryController {

  constructor(private MenucategoryService: MenucategoryService) {}

  @Get()
  async findAll() {
      return await this.MenucategoryService.findAll()
  }
  @Get(":CategoryId")
  async findOne(@Param() CategoryId: number) {
      return await this.MenucategoryService.findOne(CategoryId)
  }

  @Post()
  async create(@Body() createMenucategoryDto: Menucategory) {
      return await this.MenucategoryService.create(createMenucategoryDto)
  }

  @Put(":CategoryId")
  async update(@Param() CategoryId: number, @Body() createMenucategoryDto: Menucategory) {
      return this.MenucategoryService.update(CategoryId, createMenucategoryDto)
  }

  @Delete()
  async delete(@Body() CategoryId: number) {
      return this.MenucategoryService.remove(CategoryId)
  }
}
