import { Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DemoService } from './service';
import { ResponseDataFormat } from '../common/responseDataFormat';
import { DemoDto, DemoDeleteParams, SchemaDto } from './dto';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) { }

  @Get('get')
  getDemo(): Promise<ResponseDataFormat> {
    return this.demoService.getDemo();
  }

  @Get('getSchema')
  getFormSchema(@Query('schemaKey') schemaKey: string): Promise<ResponseDataFormat> {
    return this.demoService.getSchema(schemaKey);
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

  @Get('schema/list')
  getSchemaList(): Promise<ResponseDataFormat> {
    return this.demoService.getSchemaList();
  }

  @Get('schema/item')
  getSchemaItem(@Query('id') id: number): Promise<ResponseDataFormat> {
    return this.demoService.getSchemaItem(id);
  }

  @Post('schema/save')
  @UseInterceptors(FileInterceptor('schemaFile'))
  schemaSave(@UploadedFile() file: Express.Multer.File, @Body() body: SchemaDto): Promise<ResponseDataFormat> {
    return this.demoService.schemaSave(file, body);
  }
}
