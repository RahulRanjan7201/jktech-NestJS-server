import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('facebook/callback')
  facebookLoginCallback(@Req() req, @Res() res) {
    const token = this.authService.addUser(req.body);
    res.send(token) 
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
