import { Categoryofmenu } from "src/entities/categoryofmenu.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Randomstatistics } from "./randomstatistics.entity";


@Entity('Menu')
export class Menu {
    @PrimaryGeneratedColumn()
    MenuId: number;
  
    @Column()
    MenuName: string;

    @Column()
    MenuImg: string;

    @Column()
    Calories: number;

    @Column()
    Preparation: string;

    @Column()
    Ingredients: string;

    @OneToMany(()=> Categoryofmenu, (categoryofmenu) => categoryofmenu.menu, {onDelete: 'CASCADE'})
    categoryofmenu: Categoryofmenu[];

    @OneToMany(()=> Randomstatistics, (randomstatistics) => randomstatistics.menu, {onDelete: 'CASCADE'})
    randomstatistics: Randomstatistics[];



}
