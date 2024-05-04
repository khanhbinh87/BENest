import { Controller, Get, Post, Render, Request, UseGuards } from '@nestjs/common';
import { Public } from './decorator/customize';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    
    private authService: AuthService
  ) {}

  

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
   handleLogin(@Request() req) {
    {
      return this.authService.login(req.user);
    }
  }
  
  
}
