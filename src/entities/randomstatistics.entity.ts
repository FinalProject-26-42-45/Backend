import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Menu } from "./menu.entity";


@Entity('RandomStatistics')
export class Randomstatistics {

    @PrimaryGeneratedColumn()
    RandomId: number;

    @Column()
    RandomCount: number;

    @Column()
    MenuId: number;
    @ManyToOne(()=> Menu, (menu) => menu.randomstatistics, {eager: true})
    @JoinColumn({name:"MenuId"})
    menu: Menu;
}
