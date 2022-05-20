import { Module } from '@nestjs/common';
import { MenuhistoryService } from '../services/menuhistory/menuhistory.service';
import { MenuhistoryController } from '../controller/menuhistory/menuhistory.controller';
import { Menuhistory } from '../entities/menuhistory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Menuhistory])],
  controllers: [MenuhistoryController],
  providers: [MenuhistoryService]
})
export class MenuhistoryModule {}
