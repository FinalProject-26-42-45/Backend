import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/dto/users/create-user.dto';
import { LoginUserDto } from 'src/dto/users/login-user-dto';
import { UserDto } from 'src/dto/users/user-dto';
import { UsersService } from 'src/services/users/users.service';
import { JwtPayload } from './jwt.strategy';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService, 
        private readonly jwtService: JwtService, ) {}
    
async register(UserDto: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
        success: true,
        message: 'user registered',
    };
    try {  
        await this.usersService.createUser(UserDto);
    } catch (err) {
        console.log(err);
        status = {
            success: false,
            message: err,
        };
    }
    return status;
}

async registerAdmin(UserDto: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
        success: true,
        message: 'user registered',
    };
    try {  
        await this.usersService.createAdmin(UserDto);
    } catch (err) {
        status = {
            success: false,
            message: err,
        };
    }
    return status;
}

async login(loginUserDto: LoginUserDto){
    
    //find user in DB
    const user = await this.usersService.findByLogin(loginUserDto);

    //generate and sign token
    const token = this.createToken(user);

    return {
        Username: user.Username, ...token,
    };
}

private createToken({ Username }: UserDto): any {
    const user: JwtPayload = { Username };
    const accessToken = this.jwtService.sign(user);
    return {
        expiresIn: process.env.EXPIRESIN,
        accessToken,
    };
}

async validateUser(payload: JwtPayload): Promise<UserDto> {
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
}

}
export interface RegistrationStatus {
    success: boolean;
    message: string;
}
