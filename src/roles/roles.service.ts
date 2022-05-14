import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) { }

  create(roles: Role): Promise<Role> {
    return this.roleRepository.save(roles);
  }

  findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  findOne(RoleId: number) {
    return this.roleRepository.findOne(RoleId);
  }

  async update(RoleId: number, roles: Role) {
    await this.roleRepository.update(RoleId, roles)
  }

  async remove(RoleId: number): Promise<void> {
    await this.roleRepository.delete(RoleId);
  }
}
