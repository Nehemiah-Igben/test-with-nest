import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dtos';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  findUserById(@Param('userId', ParseIntPipe) id: number) {
    return this.usersService.findUserById(id);
  }

  @Get()
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Delete(':userId')
  deleteUserById(@Param('userId', ParseIntPipe) id: number) {
    return this.usersService.deleteUserById(id);
  }
}
