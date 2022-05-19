import { Module } from '@nestjs/common';
import { MenuService } from '../services/menu/menu.service';
import { MenuController } from '../controller/menu/menu.controller';
import { Menu } from '../entities/menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryofmenuService } from 'src/services/categoryofmenu/categoryofmenu.service';
import { Categoryofmenu } from 'src/entities/categoryofmenu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menu, Categoryofmenu])],
  controllers: [MenuController],
  providers: [MenuService, CategoryofmenuService]
})
export class MenuModule {}
