import { IsArray, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

     @IsNotEmpty() Firstname: string;
     @IsNotEmpty() Lastname: string;
     @IsNotEmpty() Username: string;
     @IsNotEmpty() Password: string;
     @IsNotEmpty() DOB: Date;
     @IsNotEmpty() Religion: string;

     @IsNotEmpty() 
     @IsArray()
     @IsString({each:true})
     FoodAllergens: any;

     @IsNotEmpty() 
     @IsArray()
     @IsString({each:true})
     @IsNotEmpty() FavoriteMenuCategory: any;

     @IsNotEmpty() 
     @IsArray()
     @IsString({each:true})
     @IsNotEmpty() DislikedFood: any;
      
     RoleId: number;

}
