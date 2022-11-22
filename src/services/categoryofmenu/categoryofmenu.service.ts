import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryofmenuDto } from '../../dto/categoryofmenu/create-categoryofmenu.dto';
import { Categoryofmenu } from '../../entities/categoryofmenu.entity';

@Injectable()
export class CategoryofmenuService {
  constructor(
    @InjectRepository(Categoryofmenu)
    private Repository: Repository<Categoryofmenu>,
  ) { }

  create(com: any) {
    for (let cate in com.Category) {
      const obj = {
        MenuId: com.MenuId,
        CategoryId: com.Category[cate].CategoryId
      }
      this.Repository.save(obj)

    }

  }

}
