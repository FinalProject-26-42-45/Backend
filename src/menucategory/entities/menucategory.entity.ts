import { Menu } from "src/menu/entities/menu.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('menucategory')
export class Menucategory {

    @PrimaryGeneratedColumn()
    CategoryId: number;
  
    @Column()
    CategoryName: string;

    @ManyToMany(() => Menu)
    menu: Menu[];
}
