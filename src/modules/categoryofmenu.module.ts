import { Module } from '@nestjs/common';
import { CategoryofmenuService } from '../services/categoryofmenu/categoryofmenu.service';
import { CategoryofmenuController } from '../controller/categoryofmenu/categoryofmenu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoryofmenu } from '../entities/categoryofmenu.entity';

@Module({
  controllers: [CategoryofmenuController],
  providers: [CategoryofmenuService],
  imports: [TypeOrmModule.forFeature([Categoryofmenu])],
  exports: [CategoryofmenuService]
})
export class CategoryofmenuModule {}
