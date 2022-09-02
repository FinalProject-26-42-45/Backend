import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Request } from '@nestjs/common';
import { MenuhistoryService } from '../../services/menuhistory/menuhistory.service';
// import { CreateMenuhistoryDto } from '../../dto/menuhistory/create-menuhistory.dto';
// import { UpdateMenuhistoryDto } from '../../dto/menuhistory/update-menuhistory.dto';
import { Menuhistory } from '../../entities/menuhistory.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { log } from 'console';

@Controller('menuhistory')
export class MenuhistoryController {
  constructor(private menuhistoryService: MenuhistoryService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  addMenuhistory(@Request() request: any, @Body() Menuname: any){
    this.menuhistoryService.addHistory(request.user.UserId, Menuname.MenuName)
  }
}
