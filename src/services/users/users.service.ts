import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, editUserDto } from 'src/dto/users/create-user.dto';
import { LoginUserDto } from 'src/dto/users/login-user-dto';
import { UserDto } from 'src/dto/users/user-dto';
import { Users } from 'src/entities/users.entity';
import { toUserDto } from 'src/mapper/mapper';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as fs from 'fs';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) { }

  findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async findUser(UserId: number) {
    const user =  await this.userRepository.findOne(UserId)
    const data = {
      UserId: user.UserId,
      Firstname: user.Firstname,
      Lastname: user.Lastname,
      Religion: user.Religion,
      FoodAllergens: user.FoodAllergens.split(","),
      DislikedFood: user.DislikedFood.split(",")
    }
      return data;
    }

    

  async findOne(options?: object): Promise<UserDto> {
    const user = await this.userRepository.findOne(options);
    return toUserDto(user);
  }

  async findByLogin({ Username, Password }: LoginUserDto): Promise<UserDto> {
    const user = await this.userRepository.findOne({ where: { Username } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    //compare passwords
    const isValid = await bcrypt.compare(Password, user.Password)
    // console.log(test);
    if(isValid){
      return toUserDto(user);
    }
    throw new HttpException('Password not wrong.', HttpStatus.UNAUTHORIZED);
  
   
  }

  async findByPayload({ Username }: any): Promise<UserDto> {
    return await this.findOne({ where: { Username } });
  }

  async createUser(userDto: CreateUserDto): Promise<UserDto> {
    
    let { Username, Password, Firstname, Lastname, DOB, Religion, FoodAllergens,
      DislikedFood, RoleId = 2} = userDto;

      FoodAllergens = FoodAllergens.toString()
      DislikedFood = DislikedFood.toString()

    // check if the user exists in the DB
    const userDB = await this.userRepository.findOne({ where: { Username } });
    if (userDB) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    } else {
      const user: Users = await this.userRepository.create({
        Username, Password, Firstname, Lastname, DOB, Religion, FoodAllergens,
        DislikedFood, RoleId
      });
      await this.userRepository.save(user);
      return toUserDto(user);
    }
  }

  async createAdmin(userDto: CreateUserDto): Promise<UserDto> {
    const { Username, Password, Firstname, Lastname, DOB, Religion, FoodAllergens,
      DislikedFood, RoleId = 1 } = userDto;

    // check if the user exists in the DB
    const userDB = await this.userRepository.findOne({ where: { Username } });
    if (userDB) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    } else {
      const user: Users = await this.userRepository.create({
        Username, Password, Firstname, Lastname, DOB, Religion, FoodAllergens,
      DislikedFood, RoleId
      });
      await this.userRepository.save(user);
      return toUserDto(user);
    }

  }

  async editUser(UserId: number, data: editUserDto) {
    const result = await this.userRepository.find({where: {UserId: UserId}})
    
    const newdata = {
      UserId: result[0].UserId,
      Firstname: data.Firstname,
      Lastname: data.Lastname,
      FoodAllergens: data.FoodAllergens.toString(),
      Religion: data.Religion,
      DislikedFood: data.DislikedFood.toString()
    }
    this.userRepository.save(newdata)
  }


}
