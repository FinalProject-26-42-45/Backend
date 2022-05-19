import { User } from "src/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Roles')
export class Role {
    @PrimaryGeneratedColumn()
    RoleId: number;

    @Column()
    RoleName: string;

    // @ManyToOne(()=> User, users => users.roles, {onDelete: 'CASCADE', eager: true})
    // @JoinColumn({name:"RoleId"})
    // users: User;

    @OneToMany(()=> User, users => users.roles)
    users: User
}
