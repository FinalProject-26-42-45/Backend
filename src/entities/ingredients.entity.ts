import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Recipe } from "./recipe.entity";

@Entity('Ingredients')
export class Ingredients {

    @PrimaryGeneratedColumn()
    IngredientId: number;

    @Column()
    IngredientName: string;

    @Column()
    Unit: string;

    @OneToMany(()=> Recipe, recipe => recipe.ingredients)
    recipe: Recipe[];
 }
