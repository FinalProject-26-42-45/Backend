import { Module } from '@nestjs/common';
import { RolesService } from '../services/roles/roles.service';
import { RolesController } from '../controller/roles/roles.controller';
import { Roles } from '../entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Roles])],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}
