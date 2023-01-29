import { Injectable, Logger } from '@nestjs/common';
import { DemoDto, DemoDtoByName } from './dto';
import responseDataFormat, { ResponseDataFormat } from '../common/responseDataFormat';
import formAddJson from './databse/form.add.json';
import formEditJson from './databse/form.edit.json';
import detailJson from './databse/detail.json';

@Injectable()
export class DemoService {
  private readonly logger = new Logger(DemoService.name);

  getDemo(): ResponseDataFormat {
    // 数据库操作
    const data = {
      items: [
        {
          id: '1',
          name: 'guosheng',
          age: 1,
          address: '杭州',
        },
      ],
      current: 1,
      pageSize: 10,
      total: 1,
    }
    const result = { data };
    return responseDataFormat(result);
  }

  getFormSchema(id: number): ResponseDataFormat {
    const result = { data: id ? formEditJson : formAddJson };
    return responseDataFormat(result);
  }

  getDetailSchema(id: number): ResponseDataFormat {
    const result = { data: detailJson };
    return responseDataFormat(result);
  }

  getItem(): ResponseDataFormat {
    const result = {
      data: {
        id: '1',
        name: 'guosheng',
        age: 1,
        address: '杭州',
      }
    };
    return responseDataFormat(result);
  }

  delete(id: number|string): ResponseDataFormat {
    this.logger.log(`Query 'id' is ${id}`);
    const result = id ? { data: null } : { code: -1, data: null, message: "Query 'id' is empty!" };
    return responseDataFormat(result);
  }

  getDemoById(id?: number): ResponseDataFormat {
    this.logger.log(`Query 'id' is ${id}`);
    const result = id ? { data: `Query 'id' is ${id}` } : { code: -1, data: null, message: "Query 'id' is empty!" };
    return responseDataFormat(result);
  }

  updateDemo(demo: DemoDto): ResponseDataFormat {
    this.logger.log(`Query 'name' is ${demo.name}`);
    const result = demo.name ? { data: `Query 'name' is ${demo.name}` } : { code: -1, data: null, message: "Query 'name' is empty!" };
    return responseDataFormat({ data: `${demo.name} 更新成功！` });
  }

  updateDemoByName(demo: DemoDtoByName): ResponseDataFormat {
    this.logger.log(`Query 'name' is ${demo.name}`);
    return responseDataFormat({ data: `${demo.name} 更新成功！` });
  }

  updateDemoInName(name?: string): ResponseDataFormat {
    this.logger.log(`Query 'name' is ${name}`);
    const result = name ? { data: `Query 'name' is ${name}` } : { code: -1, data: null, message: "Query 'name' is empty!" };
    return responseDataFormat({ data: `${name} 更新成功！` });
  }
}
