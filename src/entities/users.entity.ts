import { Menuhistory } from "src/entities/menuhistory.entity";
import { Roles } from "src/entities/role.entity";
import { BaseEntity, BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity('Users')
export class Users extends BaseEntity{
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
    @ManyToOne(()=> Roles, roles => roles.users, {eager: true, createForeignKeyConstraints: false})
    @JoinColumn({name:"RoleId"})
    roles: Roles;

    @OneToMany(()=> Menuhistory, menuhistory => menuhistory.users)
    menuhistory: Menuhistory[];

    @BeforeInsert() async hashPassword(){
        this.Password = await bcrypt.hash(this.Password, 10);
    }
}
