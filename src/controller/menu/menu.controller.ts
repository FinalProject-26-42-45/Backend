import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put, UseInterceptors, UseGuards, Request, UnauthorizedException, HttpException } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { MenuService } from '../../services/menu/menu.service';
import { upload } from 'src/services/common/common.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { getMenubyCategoryIdListAnonymousDto, getMenubyCategoryIdListDto } from 'src/dto/menu/create-menu.dto';




@Controller('menu')
export class MenuController {

  constructor(private menuService: MenuService) { }

  @Get()
  async findAll() {
    return await this.menuService.findAll()
  }

  @Get("img/:MenuId")
  async getImg(@Param() req: any) {
    console.log(req);
    return this.menuService.getImage(req.MenuId)
  }


  @Get("category/:CategoryId")
  async getMenu(@Param() req: any) {
    console.log(req);
    return this.menuService.getMenubyCategory(req.CategoryId)
  }

  @Get("ingredient/:MenuId")
  async getIngredients(@Param() req: any) {
    return this.menuService.getIngredientsbyMenu(req.MenuId)
  }

  @UseGuards(JwtAuthGuard)
  @Post("categorylist")
  async getCategotyList(@Body() req: getMenubyCategoryIdListDto, @Request() request: any) {
    return this.menuService.getMenubyCategoryList(req.CategoryIdList, request.user.UserId)
  }

  @Post("categorylist/anonymous")
  async getCategotyListAnonymous(@Body() req: getMenubyCategoryIdListAnonymousDto) {
    return this.menuService.getMenubyCategoryListAnonymous(req.CategoryIdList, req.receive)
  }

  @Get(":MenuId")
  async findOne(@Param() MenuId: number) {
    return await this.menuService.findOne(MenuId)
  }


  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'file', maxCount: 1 }, { name: 'json', maxCount: 1 }], upload))
  addMenu(@Request() request: any) {
    try {
      if (request.user.RoleId !== 1) {
        return {
          statusCode: 401,
          message: "You do not have permission."
        }
      } 
        return this.menuService.addMenu()
     
    } catch (err: any) {
      return {
        statusCode: err.statusCode,
        message: err.originalError
      }
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'json', maxCount: 1 }], upload))
  editMenu(@Request() request: any) {
    try {
      if (request.user.RoleId != 1) {
        return {
          statusCode: 401,
          message: "You do not have permission."
        }
      }
      return this.menuService.editMenu()
    } catch (err: any) {
      return {
        statusCode: err.statusCode,
        message: err.originalError
      }
    }
  }
  @UseGuards(JwtAuthGuard)
  @Delete(":MenuId")
  async delete(@Param() req: any, @Request() request: any) {
    try {
      if (request.user.RoleId != 1) {
        return {
          statusCode: 401,
          message: "You do not have permission."
        }
      }
      return this.menuService.remove(req.MenuId)
    } catch (err: any) {
      return {
        statusCode: err.statusCode,
        message: err.originalError
      }
    }
  }

}
