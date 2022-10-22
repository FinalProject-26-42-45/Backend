import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getImgName } from 'src/services/common/common.service';
import { Repository } from 'typeorm';
import { Menu } from '../../entities/menu.entity';
import * as fs from 'fs'
import { CategoryofmenuService } from 'src/services/categoryofmenu/categoryofmenu.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) { }

  @Inject()
  cateservice: CategoryofmenuService

  @Inject()
  userservice: UsersService



  async addMenu() {
    const imgName = getImgName()

    const data = JSON.parse(fs.readFileSync(`./public/files/data.json`, 'utf-8'))
    data.MenuImg = imgName
    //console.log(data);

    const mname = await this.menuRepository.findOne({ where: { MenuName: data.MenuName } });
    if (mname) {
      throw new HttpException('Menuname already exist!', HttpStatus.CONFLICT)
    } else {
      const menuObj = {
        MenuName: data.MenuName,
        MenuImg: data.MenuImg,
        Calories: data.Calories,
        Preparation: data.Preparation,
        Ingredients: data.Ingredients
      }
      await this.menuRepository.save(menuObj)


      const lid = await this.menuRepository.query('select*from Menu ORDER BY MenuId DESC LIMIT 1')

      const catemenu: any = {
        MenuId: lid[0].MenuId,
        Category: data.menucategory
      }

      this.cateservice.create(catemenu)
    }
  }

  findAll(): Promise<Menu[]> {
    return this.menuRepository.find();
  }

  findOne(MenuId: number) {
    return this.menuRepository.findOne(MenuId);
  }

  async editMenu() {
    const data = JSON.parse(fs.readFileSync(`./public/files/data.json`, 'utf-8'))
    const result = await this.menuRepository.find({ where: { MenuId: data.MenuId } })
    console.log(result);

    const newdata = {
      MenuId: result[0].MenuId,
      MenuName: data.MenuName,
      MenuImg: result[0].MenuImg,
      Calories: data.Calories,
      Preparation: data.Preparation,
      Ingredients: data.Ingredients
    }
    this.menuRepository.save(newdata)
  }


  async remove(MenuId: number) {
    // const img = await this.findImg(MenuId)
    // fs.unlinkSync(`./images/${img}`)
    this.menuRepository.delete(MenuId);
  }

  async findImg(MenuId: number) {
    const result = await this.menuRepository.find({ where: { MenuId: MenuId } })
    return result[0].MenuImg
  }

  async getImage(MenuId: number) {
    const image = await this.findImg(MenuId)
    return `localhost:3000/${image}`
  }

  async getMenubyCategory(CategoryId: number) {
    return await this.menuRepository.query(`select * from Menu m join CategoryOfMenu c on m.MenuId = c.MenuId where CategoryId = ${CategoryId}`)
  }

  async getIngredientsbyMenu(MenuId: number) {
    return await this.menuRepository.query(`select * from Menu m join Recipe r on m.MenuId = r.MenuId join Ingredients i on i.IngredientId = r.IngredientId
                                            where m.MenuId = ${MenuId}`)
  }

  async getMenubyCategoryList(CategoryId: number[], UserId: number) {
    
    const user = await this.userservice.findUser(UserId)
    
    const aller = user.FoodAllergens
    const dislike = user.DislikedFood

    const merge = aller.concat(dislike)

    var menu = await this.menuRepository.query(`select * from Menu m join CategoryOfMenu c on m.MenuId = c.MenuId where CategoryId in (${CategoryId})`)
    if (merge) {
      
      // merge.filter((el, index) => {
      //   for (const each of menu) {
      //     if (each.Ingredients.includes(el)) {
 
      //       menu.splice(index, 1)
      //     }
      //   }
      // })
      menu = menu.filter(each => !merge.filter(el => each.Ingredients.includes(el)).length)
    }
    
    if (user.Religion == 'อิสลาม') {
      menu = menu.filter((el: any) => !el.Ingredients.includes("หมู"))
    }
    return menu
  }

  async getMenubyCategoryListAnonymous(CategoryId: number[], receive: string[]) {
    let menu = await this.menuRepository.query(`select * from Menu m join CategoryOfMenu c on m.MenuId = c.MenuId where CategoryId in (${CategoryId})`)   
    if (receive) {
      menu = menu.filter(each => !receive.filter(el => each.Ingredients.includes(el)).length)
    }
    return menu
  }
}
