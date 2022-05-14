import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':UserId')
  async findOne(@Param() UserId: number) {
    return await this.usersService.findOne(UserId);
  }

  @Post()
  async create(@Body() createUserDto: User) {
    return await this.usersService.create(createUserDto);
  }

  @Put(":UserId")
  async update(@Param() UserId: number, @Body() createUserDto: User) {
    return this.usersService.update(UserId, createUserDto);
  }

  @Delete()
  async delete(@Body() UserId: number) {
    return this.usersService.remove(UserId);
  }
}
