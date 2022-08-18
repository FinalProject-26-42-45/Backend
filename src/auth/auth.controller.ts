import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/users/create-user.dto';
import { LoginUserDto } from 'src/dto/users/login-user-dto';
import { UserDto } from 'src/dto/users/user-dto';
import { AuthService, RegistrationStatus } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

@Post('register')
public async register(@Body() createUserDto: CreateUserDto, ): Promise<RegistrationStatus> {
    console.log(createUserDto)
    const result:
    RegistrationStatus = await this.authService.register(createUserDto);
    if (!result.success) {
        throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
}

@Post('login')
public async login(@Body() loginUserDto: LoginUserDto) {
    console.log(loginUserDto)
    return await this.authService.login(loginUserDto);
}

@Post('admin/register')
public async registerAdmin(@Body() createUserDto: CreateUserDto, ): Promise<RegistrationStatus> {
    console.log(createUserDto)
    const result:
    RegistrationStatus = await this.authService.registerAdmin(createUserDto);
    if (!result.success) {
        throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
}

@Post('admin/login')
public async loginAdmin(@Body() loginUserDto: LoginUserDto) {
    return await this.authService.login(loginUserDto);
}

}
