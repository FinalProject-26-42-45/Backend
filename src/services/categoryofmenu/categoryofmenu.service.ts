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

  create(com: CreateCategoryofmenuDto) {
    this.Repository.save(com) //ก่อน save ต้อง loop เช็คว่า cate มากี่อัน แล้วค่อย save แต่ละอัน
  }

  // findMenuId(CateId: number){
  //   this.Repository.find({ where: {CategoryId: CateId}})
  // }
}
