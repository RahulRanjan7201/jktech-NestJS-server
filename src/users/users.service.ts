import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private users = [];

   findOne(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }
   createOrUpdate(data: any): User | undefined {
    if (this.users.find((user) => user.email === data.email)) {
      this.removeUser(data.email);
    }
    console.log(data)
    this.users.push(data);
  }
  removeUser(email: string) {
    const index = this.users.findIndex(function (item) {
      return item.email === email;
    });
    this.users.splice(index, 1);
  }
}
