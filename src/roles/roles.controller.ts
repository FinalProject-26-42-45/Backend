import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get()
  async findAll() {
    return await this.rolesService.findAll();
  }

  @Get(':RoleId')
  async findOne(@Param() RoleId: number) {
    return await this.rolesService.findOne(RoleId);
  }

  @Post()
  async create(@Body() createUserDto: Role) {
    return await this.rolesService.create(createUserDto);
  }

  @Put(":RoleId")
  async update(@Param() RoleId: number, @Body() createUserDto: Role) {
    return this.rolesService.update(RoleId, createUserDto);
  }

  @Delete()
  async delete(@Body() RoleId: number) {
    return this.rolesService.remove(RoleId);
  }
}
