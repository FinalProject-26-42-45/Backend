import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Request } from '@nestjs/common';
import { MenuhistoryService } from '../../services/menuhistory/menuhistory.service';
import { Menuhistory } from '../../entities/menuhistory.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('menuhistory')
export class MenuhistoryController {
  constructor(private menuhistoryService: MenuhistoryService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async find(@Request() request: any) {
    return await this.menuhistoryService.findHistory(request.user.UserId)
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  addMenuhistory(@Request() request: any, @Body() MenuName: any){
    this.menuhistoryService.addHistory(request.user.UserId, MenuName.MenuName)
  }

  @Delete(":HistoryId")
  async remove(@Param() HistoryId: number){
    return this.menuhistoryService.deleteHistory(HistoryId)
  }
}
