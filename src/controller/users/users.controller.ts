import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseInterceptors, Request } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { Users } from 'src/entities/users.entity';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { upload } from 'src/services/common/common.service';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll()
  }

  @Get(":UserId")
  async findOne(@Param() UserId: number){
    return this.usersService.findUser(UserId)
  }

  @Put()
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'json', maxCount: 1 }], upload))
  updateUser() {
    return this.usersService.editUser()
  }
}
