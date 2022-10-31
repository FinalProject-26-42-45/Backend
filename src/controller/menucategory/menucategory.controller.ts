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

}
