import Users from "src/entities/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('MenuHistory')
export class Menuhistory {
    @PrimaryGeneratedColumn()
    HistoryId: number;

    @Column()
    MenuName: string;

    @Column()
    UserId: number;
    @ManyToOne(()=> Users, users => users.menuhistory, {onDelete: 'CASCADE', eager: true})
    @JoinColumn({name:"UserId"})
    users: Users;
}
