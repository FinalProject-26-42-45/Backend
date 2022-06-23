import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {

     @IsNotEmpty() Firstname: string;
     @IsNotEmpty() Lastname: string;
     @IsNotEmpty() Username: string;
     @IsNotEmpty() Password: string;
     @IsNotEmpty() DOB: Date;
     @IsNotEmpty() Gender: string;
     @IsNotEmpty() @IsEmail() Email: string;
     @IsNotEmpty() Tel: string;
     @IsNotEmpty() FoodAllergens: string;
     @IsNotEmpty() Religion: string;
     @IsNotEmpty() RoleId: number;

}
