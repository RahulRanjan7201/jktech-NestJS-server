import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export enum Provider {
  FACEBOOK = 'facebook',
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  addUser(user: any) {
    this.usersService.createOrUpdate(user);
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
