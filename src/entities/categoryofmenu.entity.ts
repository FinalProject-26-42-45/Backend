import { Menu } from "src/entities/menu.entity";
import { Menucategory } from "src/entities/menucategory.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('CategoryOfMenu')
export class Categoryofmenu {

    @PrimaryColumn()
    CategoryId: number
    @ManyToOne(()=> Menucategory, (menucategory) => menucategory.categoryofmenu, {primary: true})
    @JoinColumn({name:"CategoryId"})
    menucategory: Menucategory;

    @PrimaryColumn()
    MenuId: number
    @ManyToOne(()=> Menu, (menu) => menu.categoryofmenu, {primary: true})
    @JoinColumn({name:"MenuId"})
    menu: Menu;

    // @OneToMany(()=> Menu, (menu) => menu.categoryofmenu)
    // menu: Menu[];

    // @OneToMany(()=> Menucategory, (menucategory) => menucategory.categoryofmenu)
    // menucategory: Menucategory[]



}
