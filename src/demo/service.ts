import { Injectable, Logger } from '@nestjs/common';
import { DemoDto } from './dto';
import responseDataFormat, { ResponseDataFormat } from '../common/responseDataFormat';

@Injectable()
export class DemoService {
  private readonly logger = new Logger(DemoService.name);

  getDemo(name?: string): ResponseDataFormat {
    this.logger.log(`Query 'name' is ${name}`);
    const result = name ? {data: `Query 'name' is ${name}`} : {code: -1, data: null, message: "Query 'name' is empty!"};
    return responseDataFormat(result);
  }

  getDemoById(id?: number): ResponseDataFormat {
    this.logger.log(`Query 'id' is ${id}`);
    const result = id ? {data: `Query 'id' is ${id}`} : {code: -1, data: null, message: "Query 'id' is empty!"};
    return responseDataFormat(result);
  }

  updateDemo(demo: DemoDto): ResponseDataFormat {
    this.logger.log(`Query 'name' is ${demo.name}`);
    const result = demo.name ? {data: `Query 'name' is ${demo.name}`} : {code: -1, data: null, message: "Query 'name' is empty!"};
    return responseDataFormat({data: `${demo.name} 更新成功！`});
  }

  updateDemoByName(demo: DemoDto): ResponseDataFormat {
    this.logger.log(`Query 'name' is ${demo.name}`);
    return responseDataFormat({data: `${demo.name} 更新成功！`});
  }

  updateDemoInName(name?: string): ResponseDataFormat {
    this.logger.log(`Query 'name' is ${name}`);
    const result = name ? {data: `Query 'name' is ${name}`} : {code: -1, data: null, message: "Query 'name' is empty!"};
    return responseDataFormat({data: `${name} 更新成功！`});
  }
}
