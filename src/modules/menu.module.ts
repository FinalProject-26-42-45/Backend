import { Module } from '@nestjs/common';
import { MenuService } from '../services/menu/menu.service';
import { MenuController } from '../controller/menu/menu.controller';
import { Menu } from '../entities/menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryofmenuService } from 'src/services/categoryofmenu/categoryofmenu.service';
import { Categoryofmenu } from 'src/entities/categoryofmenu.entity';
import { Users } from 'src/entities/users.entity';
import { UsersService } from 'src/services/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Menu, Categoryofmenu, Users])],
  controllers: [MenuController],
  providers: [MenuService, CategoryofmenuService, UsersService]
})
export class MenuModule {}
