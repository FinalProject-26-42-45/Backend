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
    const find = await this.menuhistoryRepository.findOne({ where: { UserId: UserId, MenuName: MenuName}});
    if (find) {
      find.HistoryCount += 1
      await this.menuhistoryRepository.update(find.HistoryId, find)
    } else {
      const add: any = {
        UserId: UserId,
        MenuName: MenuName,
        HistoryCount: 1
      }
      await this.menuhistoryRepository.save(add)
    }
  }

  async deleteHistory(HistoryId: number){
    this.menuhistoryRepository.delete(HistoryId)
  }

}
