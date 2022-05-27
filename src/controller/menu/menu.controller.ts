import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { MenuService } from '../../services/menu/menu.service';
import { upload } from 'src/services/common/common.service';




@Controller('menu')
export class MenuController {

  constructor(private menuService: MenuService) {}

  @Get()
  async findAll() {
      return await this.menuService.findAll()
  }

  @Get("img/:MenuId")
  async getImg(@Param() req: any){
    console.log(req);  
    return this.menuService.getImage(req.MenuId)
  }

  // @Get("img/:MenuId")
  // async getImg(@Param() req: any, @Res() res: any){
  //   const imgname = this.menuService.findImg(req.MenuId)
  //   res.sendFile(imgname, { root: './images'})
  // }

  @Get(":MenuId")
  async findOne(@Param() MenuId: number) {
      return await this.menuService.findOne(MenuId)
  }


  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([{name: 'file', maxCount: 1}, {name: 'json', maxCount: 1}], upload))
    addMenu(){
      return this.menuService.addMenu()
    }

  @Put()
  @UseInterceptors(
    FileFieldsInterceptor([{name: 'json', maxCount: 1}], upload))
    editMenu(){
      return this.menuService.editMenu()
    }

  // @Put(":MenuId")
  // @UseInterceptors(
  //   FileFieldsInterceptor([{name: 'json', maxCount: 1}], upload))
  //   editMenu(@Param() MenuId: number){
  //     return this.menuService.editMenu(MenuId)
  //   } 

  @Delete(":MenuId")
  async delete(@Param() req: any) {
      return this.menuService.remove(req.MenuId)
  }
}
