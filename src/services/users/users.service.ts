import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/users/create-user.dto';
import { LoginUserDto } from 'src/dto/users/login-user-dto';
import { UserDto } from 'src/dto/users/user-dto';
import { Users } from 'src/entities/users.entity';
import { toUserDto } from 'src/mapper/mapper';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';



@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async findOne(options?: object): Promise<UserDto>{
    const user = await this.userRepository.findOne(options);
    return toUserDto(user);
  }

  async findByLogin({ Username, Password }: LoginUserDto): Promise<UserDto> {
    const user = await this.userRepository.findOne({ where: { Username } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    //compare passwords
    await bcrypt.compare(Password, user.Password, err => {
      if (err) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
    })

    return toUserDto(user);
  }

  async findByPayload({ Username }: any): Promise<UserDto> {
    return await this.findOne({ where: { Username }});
  }

  async createUser(userDto: CreateUserDto): Promise<UserDto> {
    const {  Firstname, Lastname, Email,
      Tel, DOB, Gender, Username, Password, FoodAllergens, Religion, RoleId=2 } = userDto;
    
    // check if the user exists in the DB
    const userDB = await this.userRepository.findOne({ where: { Username }});
    if (userDB) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user: Users = await this.userRepository.create({ Username, Password, Firstname, Lastname, DOB, Gender, Email,
      Tel, FoodAllergens, Religion, RoleId });
    await this.userRepository.save(user);
    return toUserDto(user);
  }

  async createAdmin(userDto: CreateUserDto): Promise<UserDto> {
    const { Username, Password, Firstname, Lastname, DOB, Gender, Email,
      Tel, FoodAllergens, Religion, RoleId=1 } = userDto;
    
    // check if the user exists in the DB
    const userDB = await this.userRepository.findOne({ where: { Username }});
    if (userDB) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user: Users = await this.userRepository.create({ Username, Password, Firstname, Lastname, DOB, Gender, Email,
      Tel, FoodAllergens, Religion, RoleId });
    await this.userRepository.save(user);
    return toUserDto(user);
  }


}
