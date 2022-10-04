import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos';
import { User } from './entities/user.entity';

@Injectable({})
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  findUserById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: Partial<User> = createUserDto;
    return Promise.resolve(this.userRepository.create({ ...user }));
  }

  async deleteUserById(id: number) {
    await this.userRepository.delete({ id });
  }
}
