import { IsNotEmpty } from "class-validator";

export class UserDto {
    
    @IsNotEmpty()  UserId: number;
    @IsNotEmpty()  Username: string;
    @IsNotEmpty()  Firstname: string;
    @IsNotEmpty()  Lastname: string;
    @IsNotEmpty()  DOB: Date;
    @IsNotEmpty()  FoodAllergens: string;
    @IsNotEmpty()  Religion: string;
    @IsNotEmpty()  DislikedFood: string;
    @IsNotEmpty()  RoleId: number;

}