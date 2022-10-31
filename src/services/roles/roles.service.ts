import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from '../../dto/roles/create-role.dto';
import { UpdateRoleDto } from '../../dto/roles/update-role.dto';
import { Roles } from '../../entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private roleRepository: Repository<Roles>,
  ) { }


}
