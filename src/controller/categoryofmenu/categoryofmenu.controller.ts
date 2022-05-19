import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryofmenuService } from '../../services/categoryofmenu/categoryofmenu.service';
import { CreateCategoryofmenuDto } from '../../dto/categoryofmenu/create-categoryofmenu.dto';

@Controller('categoryofmenu')
export class CategoryofmenuController {
  constructor(private readonly categoryofmenuService: CategoryofmenuService) {}

  @Post()
  create(@Body() createCategoryofmenuDto: CreateCategoryofmenuDto) {
    return this.categoryofmenuService.create(createCategoryofmenuDto);
  }

}
