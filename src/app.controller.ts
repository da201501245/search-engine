import { Controller, Get, Res, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('ping')
  healthCheck(): string {
    return 'pong';
  }

  @Get()
  @Render('index')
  renderHtml() {
    return {};
  }

}
