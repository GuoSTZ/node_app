import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import responseDataFormat, { ResponseDataFormat } from '../common/responseDataFormat';
import formAddJson from './databse/form.add.json';
import formEditJson from './databse/form.edit.json';
import detailJson from './databse/detail.json';
import { User } from './entity';

@Injectable()
export class DemoService {
  private readonly logger = new Logger(DemoService.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async getDemo(): Promise<ResponseDataFormat> {
    const [items, total] = await this.userRepository.findAndCount();
    const result = { data: {items, total, current: 1, pageSize: 10} };
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

  async getItem(id: number): Promise<ResponseDataFormat> {
    const data = await this.userRepository.findOne({where: {id}})
    return responseDataFormat({data});
  }

  delete(ids: number[]): ResponseDataFormat {
    ids.forEach((id: number) => {
      this.userRepository.query(`delete from user where id = ${id}`)
    })
    return responseDataFormat({data: null});
  }

  async save(user: User): Promise<ResponseDataFormat> {
    const isExist = await this.userRepository.exist({where: {name: user.name}})
    let result;
    if(isExist) {
      result = { code: -1, data: null, message: "名称重复" }
    } else {
      result = this.userRepository.save(user);
    }
    return responseDataFormat(result);
  }

  update(user: User): ResponseDataFormat {
    const result: any = this.userRepository.update(user.id, user);
    return responseDataFormat(result);
  }
}
