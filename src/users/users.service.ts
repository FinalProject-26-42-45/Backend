import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  create(users: User): Promise<User> {
    return this.userRepository.save(users);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(UserId: number) {
    return this.userRepository.findOne(UserId);
  }

  async update(UserId: number, users: User) {
    await this.userRepository.update(UserId, users)
  }

  async remove(UserId: number): Promise<void> {
    await this.userRepository.delete(UserId);
  }
}
