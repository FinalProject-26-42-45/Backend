import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseInterceptors, Request, UseGuards } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { Users } from 'src/entities/users.entity';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { upload } from 'src/services/common/common.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { editUserDto } from 'src/dto/users/create-user.dto';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get("info")
  async findOne(@Request() req: any){
    
    return this.usersService.findUser(req.user.UserId)
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  updateUser(@Request() req: any, @Body() request: editUserDto) { 
    return this.usersService.editUser(req.user.UserId, request)
  }
}
