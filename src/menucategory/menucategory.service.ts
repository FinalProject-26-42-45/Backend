import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menucategory } from './entities/menucategory.entity';

@Injectable()
export class MenucategoryService {
  constructor(
    @InjectRepository(Menucategory)
    private MenucategoryRepository: Repository<Menucategory>,
  ) { }

  create(Category: Menucategory): Promise<Menucategory> {
    return this.MenucategoryRepository.save(Category);
  }

  findAll(): Promise<Menucategory[]> {
    return this.MenucategoryRepository.find();
  }

  findOne(CategoryId: number) {
    return this.MenucategoryRepository.findOne(CategoryId);
  }

  async update(CategoryId: number, Category: Menucategory) {
    await this.MenucategoryRepository.update(CategoryId, Category)
  }

  async remove(CategoryId: number): Promise<void> {
    await this.MenucategoryRepository.delete(CategoryId);
  }
}
