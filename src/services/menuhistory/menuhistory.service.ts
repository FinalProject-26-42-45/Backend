import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuhistoryDto } from '../../dto/menuhistory/create-menuhistory.dto';
import { UpdateMenuhistoryDto } from '../../dto/menuhistory/update-menuhistory.dto';
import { Menuhistory } from '../../entities/menuhistory.entity';

@Injectable()
export class MenuhistoryService {
  constructor(
    @InjectRepository(Menuhistory)
    private menuhistoryRepository: Repository<Menuhistory>,
  ) { }

  async addHistory(UserId: number, MenuName: string){
    this.menuhistoryRepository.save({UserId: UserId, MenuName: MenuName})
  }

}
