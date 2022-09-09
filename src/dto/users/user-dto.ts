import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDto {
    
    @IsNotEmpty()  UserId: number;
    @IsNotEmpty()  Username: string;
    @IsNotEmpty()  Firstname: string;
    @IsNotEmpty()  Lastname: string;
    @IsNotEmpty()  DOB: Date;
    @IsNotEmpty()  Gender: string;
    @IsNotEmpty()  @IsEmail()  Email: string;
    @IsNotEmpty()  Tel: string;
    @IsNotEmpty()  FoodAllergens: string;
    @IsNotEmpty()  Religion: string;
    @IsNotEmpty()  RoleId: number;

}