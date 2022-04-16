import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) { }

  create(menu: Menu): Promise<Menu> {
    return this.menuRepository.save(menu);
  }

  findAll(): Promise<Menu[]> {
    return this.menuRepository.find();
  }

  findOne(MenuId: number) {
    return this.menuRepository.findOne(MenuId);
  }

  async update(MenuId: number, menu: Menu) {
    await this.menuRepository.update(MenuId, menu)
  }

  async remove(MenuId: number): Promise<void> {
    await this.menuRepository.delete(MenuId);
  }
}
