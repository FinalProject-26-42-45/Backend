import { Menuhistory } from "src/entities/menuhistory.entity";
import { Role } from "src/entities/role.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
export default class Users {
    @PrimaryGeneratedColumn()
    UserId: number;

    @Column()
    Firstname: string;

    @Column()
    Lastname: string;

    @Column()
    Username: string;

    @Column()
    Password: string;

    @Column()
    DOB: Date;

    @Column()
    Gender: string;

    @Column()
    Email: string;

    @Column()
    Tel: string;

    @Column()
    FoodAllergens: string;

    @Column()
    Religion: string;

    @Column()
    RoleId: number;
    @ManyToOne(()=> Role, roles => roles.users, {onDelete: 'CASCADE', eager: true})
    @JoinColumn({name:"RoleId"})
    roles: Role;

    @OneToMany(()=> Menuhistory, menuhistory => menuhistory.users)
    menuhistory: Menuhistory[];

}
