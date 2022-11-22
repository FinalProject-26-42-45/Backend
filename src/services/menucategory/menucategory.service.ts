import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menucategory } from '../../entities/menucategory.entity';

@Injectable()
export class MenucategoryService {
  constructor(
    @InjectRepository(Menucategory)
    private MenucategoryRepository: Repository<Menucategory>,
  ) { }


  findAll(): Promise<Menucategory[]> {
    return this.MenucategoryRepository.find();
  }


}
