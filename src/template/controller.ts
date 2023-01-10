import { Controller, Get } from '@nestjs/common';
import { TestService } from './service';

@Controller()
export class TestController {
  constructor(private readonly service: TestService) {}

  @Get()
  getHello(): string {
    return this.service.getTest();
  }
}
