import { Module } from '@nestjs/common';
import { MenuhistoryService } from './menuhistory.service';
import { MenuhistoryController } from './menuhistory.controller';
import { Menuhistory } from './entities/menuhistory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Menuhistory])],
  controllers: [MenuhistoryController],
  providers: [MenuhistoryService]
})
export class MenuhistoryModule {}
