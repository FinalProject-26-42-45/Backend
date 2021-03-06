import { Module } from '@nestjs/common';
import { MenucategoryService } from '../services/menucategory/menucategory.service';
import { MenucategoryController } from '../controller/menucategory/menucategory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menucategory } from '../entities/menucategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menucategory])],
  controllers: [MenucategoryController],
  providers: [MenucategoryService]
})
export class MenucategoryModule {}
