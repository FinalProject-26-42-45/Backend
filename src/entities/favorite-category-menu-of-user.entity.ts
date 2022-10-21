import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Menucategory } from "./menucategory.entity";
import { Users } from "./users.entity";

@Entity('FavoriteCategoryMenuOfUser')
export class FavoriteCategoryMenuOfUser {
    
    @PrimaryGeneratedColumn()
    FavoriteId: number;

    @Column()
    UserId: number;
    @ManyToOne(()=> Users, users => users.favoriteCategoryMenuOfUser, {eager: true, createForeignKeyConstraints: false})
    @JoinColumn({name:"UserId"})
    users: Users;

    @Column()
    CategoryId: number;
    @ManyToOne(()=> Menucategory, menucategory => menucategory.favoriteCategoryMenuOfUser, {eager: true, createForeignKeyConstraints: false})
    @JoinColumn({name:"CategoryId"})
    menucategory: Menucategory;

}
