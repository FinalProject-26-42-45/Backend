import { Categoryofmenu } from "src/entities/categoryofmenu.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('MenuCategory')
export class Menucategory {

    @PrimaryGeneratedColumn()
    CategoryId: number;
  
    @Column()
    CategoryName: string;

    @OneToMany(()=> Categoryofmenu, (categoryofmenu) => categoryofmenu.menucategory)
    categoryofmenu: Categoryofmenu[]

}
