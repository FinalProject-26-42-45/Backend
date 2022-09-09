import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Menu } from "./menu.entity";


@Entity('RandomStatistics')
export class Randomstatistic {

    @PrimaryGeneratedColumn()
    RandomId: number;

    @Column()
    MenuId: number;
    @ManyToOne(()=> Menu, (menu) => menu.randomstatistic, {eager: true})
    @JoinColumn({name:"MenuId"})
    menu: Menu;

    @Column()
    HistoryId: number;
}
