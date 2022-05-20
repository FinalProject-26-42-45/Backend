import { Menu } from "src/entities/menu.entity";
import { Menucategory } from "src/entities/menucategory.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('CategoryOfMenu')
export class Categoryofmenu {

    @PrimaryGeneratedColumn()
    CateOfMenuId: number
    
    @Column()
    MenuId: number
    @ManyToOne(()=> Menu, (menu) => menu.categoryofmenu, {eager: true})
    @JoinColumn({name:"MenuId"})
    menu: Menu;
    
    @Column()
    CategoryId: number
    @ManyToOne(()=> Menucategory, (menucategory) => menucategory.categoryofmenu, {eager: true})
    @JoinColumn({name:"CategoryId"})
    menucategory: Menucategory;



    // @OneToMany(()=> Menu, (menu) => menu.categoryofmenu)
    // menu: Menu[];

    // @OneToMany(()=> Menucategory, (menucategory) => menucategory.categoryofmenu)
    // menucategory: Menucategory[]



}
