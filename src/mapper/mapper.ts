import { UserDto } from "src/dto/users/user-dto";
import { Users } from 'src/entities/users.entity';

export const toUserDto = (data: Users): UserDto => {
    const { UserId, Username, Firstname, Lastname, DOB, Gender, Email,
        Tel, FoodAllergens, Religion, RoleId} = data;
    let userDto: UserDto = { UserId, Username, Firstname, Lastname, DOB, Gender, Email,
        Tel, FoodAllergens, Religion, RoleId };
    return userDto;    
}

