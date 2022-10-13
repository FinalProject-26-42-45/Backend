import { Module } from '@nestjs/common';
import { UsersService } from '../services/users/users.service';
import { UsersController } from '../controller/users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Roles } from 'src/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Roles])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
 