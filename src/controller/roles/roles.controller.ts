import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RolesService } from '../../services/roles/roles.service';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

}
