import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  find(): User[] {
    return this.usersService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string): User {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateUserDto): void {
    return this.usersService.create(body);
  }

  @Put()
  update(@Body() body: UpdateUserDto): void {
    return this.usersService.update(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    return this.usersService.delete(id);
  }
}