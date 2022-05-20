import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Users from '../../entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) { }

  create(users: Users): Promise<Users> {
    return this.userRepository.save(users);
  }

  findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  findOne(UserId: number) {
    return this.userRepository.findOne(UserId);
  }

  async update(UserId: number, users: Users) {
    await this.userRepository.update(UserId, users)
  }

  async remove(UserId: number): Promise<void> {
    await this.userRepository.delete(UserId);
  }
}
