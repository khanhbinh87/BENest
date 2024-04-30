import { Controller, Get, Post, Render, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configServie: ConfigService,
    private authService: AuthService
  ) {}

  @Get()
  @Render('home')
  getHello() {
    const message = this.configServie.get<string>('PORT');
    return {
      message,
    };
  }
  @UseGuards(LocalAuthGuard)
  @Post('/login')
   handleLogin(@Request() req) {
    {
      return this.authService.login(req.user);
    }
  }
}
