import { Categoryofmenu } from "src/entities/categoryofmenu.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FavoriteCategoryMenuOfUser } from "./favorite-category-menu-of-user.entity";

@Entity('MenuCategory')
export class Menucategory {

    @PrimaryGeneratedColumn()
    CategoryId: number;
  
    @Column()
    CategoryName: string;

    @OneToMany(()=> Categoryofmenu, (categoryofmenu) => categoryofmenu.menucategory)
    categoryofmenu: Categoryofmenu[]

    @OneToMany(()=> FavoriteCategoryMenuOfUser, (favoriteCategoryMenuOfUser) => favoriteCategoryMenuOfUser.menucategory)
    favoriteCategoryMenuOfUser: FavoriteCategoryMenuOfUser[]

}
