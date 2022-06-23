import { Users } from 'src/entities/users.entity';
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Roles')
export class Roles {
    @PrimaryColumn()
    RoleId: number;

    @Column()
    RoleName: string;

    @OneToMany(()=> Users, users => users.roles)
    users: Users[];
}
