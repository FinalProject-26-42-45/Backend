import { Module } from '@nestjs/common';
import { RolesService } from '../services/roles/roles.service';
import { RolesController } from '../controller/roles/roles.controller';
import { Role } from '../entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}
