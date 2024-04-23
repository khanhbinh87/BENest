import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configServie: ConfigService,
  ) {}

  @Get()
  @Render('home')
  getHello() {
    const message = this.configServie.get<string>('PORT');
    return {
      message,
    };
  }
}
