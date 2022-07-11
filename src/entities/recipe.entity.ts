import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ingredients } from "./ingredients.entity";
import { Menu } from "./menu.entity";

@Entity('Recipe')
export class Recipe {

    @PrimaryGeneratedColumn()
    RecipeId: number

    @Column()
    IngerdientId: number;
    @ManyToOne(()=> Ingredients, ingredients => ingredients.recipe)
    @JoinColumn({name:"IngerdientId"})
    ingredients: Ingredients;

    @Column()
    MenuId: number;
    @ManyToOne(()=> Menu, menu => menu.recipe)
    @JoinColumn({name:"menuId"})
    menu: Menu;

    @Column()
    Quantity: string;
    
}
