import { Categoryofmenu } from "src/entities/categoryofmenu.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(()=> Categoryofmenu, (categoryofmenu) => categoryofmenu.menu)
    categoryofmenu: Categoryofmenu[];

    // @ManyToOne(()=> Categoryofmenu, (categoryofmenu) => categoryofmenu.menu)
    // @JoinColumn({name:"MenuId"})
    // categoryofmenu: Categoryofmenu;

}
