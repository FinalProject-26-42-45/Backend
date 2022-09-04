import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/dto/users/create-user.dto';
import { LoginUserDto } from 'src/dto/users/login-user-dto';
import { UserDto } from 'src/dto/users/user-dto';
import { UsersService } from 'src/services/users/users.service';
import { RelationQueryBuilder } from 'typeorm';
import { JwtPayload } from './jwt.strategy';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,) { }

    async register(UserDto: CreateUserDto): Promise<RegistrationStatus> {
        let status: RegistrationStatus = {
            success: true,
            message: 'user registered',
        };
        try {
            await this.usersService.createUser(UserDto);
        } catch (err) {
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


    async login(loginUserDto: LoginUserDto, isAdmin?: string) {

        //find user in DB
        const user = await this.usersService.findByLogin(loginUserDto);
        if (isAdmin) {          
            if (user.RoleId != 1) {
                throw new UnauthorizedException("You do not have permission.");
            }
        }
        //generate and sign token
        const token = this.createToken(user);

        return {
            Username: user.Username, RoleId: user.RoleId, ...token,
        };
    }

    private createToken({ UserId, Username, RoleId }: UserDto): any {
        const user: JwtPayload = { UserId, Username, RoleId };
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
