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

  create(menuhistory: Menuhistory): Promise<Menuhistory> {
    return this.menuhistoryRepository.save(menuhistory);
  }

  findAll(): Promise<Menuhistory[]> {
    return this.menuhistoryRepository.find();
  }

  findOne(HistoryId: number) {
    return this.menuhistoryRepository.findOne(HistoryId);
  }

  async update(HistoryId: number, menuhistory: Menuhistory) {
    await this.menuhistoryRepository.update(HistoryId, menuhistory)
  }

  async remove(HistoryId: number): Promise<void> {
    await this.menuhistoryRepository.delete(HistoryId);
  }
}
