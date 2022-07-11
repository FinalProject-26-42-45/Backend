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

  create(roles: Roles): Promise<Roles> {
    return this.roleRepository.save(roles);
  }

  findAll(): Promise<Roles[]> {
    return this.roleRepository.find();
  }

  findOne(RoleId: number) {
    return this.roleRepository.findOne(RoleId);
  }

  async update(RoleId: number, roles: Roles) {
    await this.roleRepository.update(RoleId, roles)
  }

  async remove(RoleId: number): Promise<void> {
    await this.roleRepository.delete(RoleId);
  }
}
