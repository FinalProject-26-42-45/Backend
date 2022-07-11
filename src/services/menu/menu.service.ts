import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getImgName } from 'src/services/common/common.service';
import { Repository } from 'typeorm';
import { Menu } from '../../entities/menu.entity';
import * as fs from 'fs'
import { CategoryofmenuService } from 'src/services/categoryofmenu/categoryofmenu.service';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) { }

  @Inject()
  cateservice: CategoryofmenuService

  async addMenu() {
    const imgName = getImgName()
    
    const data = JSON.parse(fs.readFileSync(`./public/files/data.json`, 'utf-8')) 
    data.MenuImg = imgName
    console.log(data);

    const menuObj = {
      MenuName: data.MenuName,
      MenuImg: data.MenuImg,
      Calories: data.Calories,
      Preparation: data.Preparation
    }
    this.menuRepository.save(menuObj)

    const lid = await this.menuRepository.query('select*from Menu ORDER BY MenuId DESC LIMIT 1')
    
    const catemenu = {
      MenuId: lid[0].MenuId,
      CategoryId: data.menucategory.CategoryId
    }
    console.log(catemenu);
    
    this.cateservice.create(catemenu)
  }

  findAll(): Promise<Menu[]> {
    return this.menuRepository.find();
  }

  findOne(MenuId: number) {
    return this.menuRepository.findOne(MenuId);
  }

  async editMenu() {
    const data = JSON.parse(fs.readFileSync(`./public/files/data.json`, 'utf-8'))
    const result = await this.menuRepository.find({where: {MenuId: data.MenuId }})
    console.log(result);
    
    const newdata = {
      MenuId: result[0].MenuId,
      MenuName: data.MenuName,
      MenuImg: result[0].MenuImg,
      Calories: data.Calories,
      Preparation: data.Preparation
    }
    this.menuRepository.save(newdata)
  }

  async remove(MenuId: number){
    const img = await this.findImg(MenuId)
    fs.unlinkSync(`./images/${img}`)
    this.menuRepository.delete(MenuId);
  }

  async findImg(MenuId: number){
    const result = await this.menuRepository.find({where: {MenuId: MenuId }})
    return result[0].MenuImg
  }

  async getImage(MenuId: number){
    const image = await this.findImg(MenuId)
    return `localhost:3000/${image}`
  }
}
