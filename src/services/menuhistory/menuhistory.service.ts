import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menuhistory } from '../../entities/menuhistory.entity';

@Injectable()
export class MenuhistoryService {
  constructor(
    @InjectRepository(Menuhistory)
    private menuhistoryRepository: Repository<Menuhistory>,
  ) { }

  findAll(): Promise<Menuhistory[]> {
    return this.menuhistoryRepository.find();
  }

  findHistory(UserId: number) {
    return this.menuhistoryRepository.find({where: {UserId: UserId }})
  }

  async addHistory(UserId: number, MenuName: string){
    this.menuhistoryRepository.save({UserId: UserId, MenuName: MenuName})
  }

  async deleteHistory(HistoryId: number){
    this.menuhistoryRepository.delete(HistoryId)
  }

}
