import { Controller, Delete, Get, Request, UseGuards } from '@nestjs/common';
import { Put } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('posts')
export class PostsController {
    constructor(private authService: AuthService) {}
    @UseGuards(JwtAuthGuard)
  @Get('/')
  getPost(@Request() req) {
    return req.user;
  }
  @UseGuards(JwtAuthGuard)
  @Delete('/')
  deletePost(@Request() req) {
    return req.user;
  }
  @UseGuards(JwtAuthGuard)
  @Post('/')
  createPost(@Request() req) {
    return req.user;
  }
  @UseGuards(JwtAuthGuard)
  @Put('/')
  updatePost(@Request() req) {
    return req.user;
  }
}
