import { Menucategory } from "src/menucategory/entities/menucategory.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('menu')
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

    @ManyToMany(() => Menucategory, {eager: true})
    @JoinTable({name:"categoryofmenu", joinColumn:{
        name:"MenuId", referencedColumnName:"MenuId"
    }, inverseJoinColumn:{
        name:"CategoryId", referencedColumnName:"CategoryId"
    }})
    menucategory: Menucategory[];
}
