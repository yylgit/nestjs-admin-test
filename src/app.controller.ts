import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly adminSite: DefaultAdminSite,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('register')
  register() {

    // this.adminSite.register('User', User);
  }
}
