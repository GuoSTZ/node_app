import { Body, Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { DemoService } from './service';
import { Name } from 'src/common/decorators';
import { ResponseDataFormat } from '../common/responseDataFormat';
import { DemoDto, DemoDtoByName } from './dto';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) { }

  @Get('get')
  getDemo(@Query('name') name: string): ResponseDataFormat {
    return this.demoService.getDemo(name);
  }

  // 仅id为number时，可正常返回，否则直接返回报错，不再调用service方法
  @Get('getById')
  getDemoById(@Query('id', ParseIntPipe) id: number) {
    return this.demoService.getDemoById(id);
  }

  @Post('update')
  updateDemo(@Body() demo: DemoDto): ResponseDataFormat {
    return this.demoService.updateDemo(demo);
  }

  // 必须传递name参数，否则直接返回报错，不再调用service方法
  @Post('updateByName')
  updateDemoByName(@Body() demo: DemoDtoByName): ResponseDataFormat {
    return this.demoService.updateDemoByName(demo);
  }

  @Post('updateInName')
  updateDemoInName(@Name() name: string): ResponseDataFormat {
    return this.demoService.updateDemoInName(name);
  }
}
