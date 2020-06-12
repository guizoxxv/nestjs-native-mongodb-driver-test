import { Injectable, NotFoundException, Body } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Huguinho',
      email: 'huguinho@example.com',
      age: 10,
    },
    {
      id: 2,
      name: 'Zezinho',
      email: 'zezinho@example.com',
      age: 20,
    },
    {
      id: 3,
      name: 'Luizinho',
      email: 'luizinho@example.com',
      age: 30,
    },
  ];

  find(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    let result = this.users.find(user => user.id === parseInt(id));

    if (! result) {
      throw new NotFoundException;
    }

    return result;
  }

  create(body: CreateUserDto): void {
    this.users.push(body);
  }

  update(body: UpdateUserDto): void {
    let result = this.users.find(user => user.id === body.id);

    if (! result) {
      throw new NotFoundException;
    }

    this.users = this.users.map(user => {
      if (user.id === body.id) {
        return {
          ...user,
          ...body,
        }
      }

      return user;
    });
  }

  delete(id: string): void {
    let result = this.users.find(user => user.id === parseInt(id));

    if (! result) {
      throw new NotFoundException;
    }

    this.users = this.users.filter(user => user.id !== parseInt(id));
  }
}