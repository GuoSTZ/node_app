import { Body, Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { DemoService } from './service';
import { ResponseDataFormat } from '../common/responseDataFormat';
import { DemoDto, DemoDeleteParams } from './dto';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) { }

  @Get('get')
  getDemo(): Promise<ResponseDataFormat> {
    return this.demoService.getDemo();
  }

  @Get('getFormSchema')
  getFormSchema(@Query('id') id: number): ResponseDataFormat {
    return this.demoService.getFormSchema(id);
  }

  @Get('getDetailSchema')
  getDetailSchema(@Query('id') id: number): ResponseDataFormat {
    return this.demoService.getDetailSchema(id);
  }

  @Get('getItem')
  getItem(@Query('id') id: number): Promise<ResponseDataFormat> {
    return this.demoService.getItem(id);
  }

  @Post('delete')
  delete(@Body() params: DemoDeleteParams): ResponseDataFormat {
    return this.demoService.delete(params.ids);
  }

  @Post('save')
  save(@Body() demo: DemoDto): Promise<ResponseDataFormat> {
    return this.demoService.save(demo);
  }

  @Post('update')
  update(@Body() demo: DemoDto): ResponseDataFormat {
    return this.demoService.update(demo);
  }
}
