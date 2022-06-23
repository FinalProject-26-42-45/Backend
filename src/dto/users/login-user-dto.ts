import { IsNotEmpty } from "class-validator";

export class LoginUserDto {
    
    @IsNotEmpty() readonly Username: string;
    @IsNotEmpty() readonly Password: string;

}