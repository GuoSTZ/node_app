import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import responseDataFormat, { ResponseDataFormat } from '../common/responseDataFormat';
import { User, Schema } from './entity';

@Injectable()
export class DemoService {
  private readonly logger = new Logger(DemoService.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Schema)
    private readonly schemaRepository: Repository<Schema>,
  ) { }

  async getDemo(): Promise<ResponseDataFormat> {
    const [items, total] = await this.userRepository.findAndCount();
    const result = { data: {items, total, current: 1, pageSize: 10} };
    return responseDataFormat(result);
  }

  async getSchema(schemaKey: string): Promise<ResponseDataFormat> {
    const data = await this.schemaRepository.findOne({where: {schemaKey}})
    return responseDataFormat({data: JSON.parse(data.schemaFile)});
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

  async getSchemaList(): Promise<ResponseDataFormat> {
    const [items, total] = await this.schemaRepository.findAndCount();
    const result = { data: {items, total, current: 1, pageSize: 10} };
    return responseDataFormat(result);
  }

  async getSchemaItem(id: number): Promise<ResponseDataFormat> {
    const data = await this.schemaRepository.findOne({where: {id}})
    return responseDataFormat({data});
  }

  async schemaSave(file: Express.Multer.File, schema: Schema): Promise<ResponseDataFormat> {
    const isExist = await this.schemaRepository.exist({where: {schemaKey: schema.schemaKey}})
    let result;
    if(isExist) {
      result = { code: -1, data: null, message: "Schema Key重复" }
    } else {
      result = this.schemaRepository.save({
        ...schema, 
        schemaFile: file.buffer.toString(),
        schemaFileName: file.originalname
      });
    }
    return responseDataFormat(result);
  }
}
