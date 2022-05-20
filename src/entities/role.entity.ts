import Users from "src/entities/users.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Roles')
export class Role {
    @PrimaryGeneratedColumn()
    RoleId: number;

    @Column()
    RoleName: string;

    @OneToMany(()=> Users, users => users.roles)
    users: Users[];
}
