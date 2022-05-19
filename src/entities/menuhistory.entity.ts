import { User } from "src/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('MenuHistory')
export class Menuhistory {
    @PrimaryGeneratedColumn()
    HistoryId: number;

    @Column()
    MenuName: string;

    @OneToMany(()=> User, users => users.menuhistory)
    users: User
}
