import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('menuhistory')
export class Menuhistory {
    @PrimaryGeneratedColumn()
    HistoryId: number;

    @Column()
    MenuName: string;

    @OneToMany(()=> User, users => users.menuhistory)
    users: User
}
