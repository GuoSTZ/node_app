import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DemoDto {
  id: number;
  @IsNotEmpty()
  name: string;
  // @IsNumber()
  age?: number;
  address?: string;
  updateTime?: Date;
  createTime?: Date;
}

export class DemoDeleteParams {
  @IsNotEmpty()
  ids: number[];
}

export class SchemaDto {
  id: number;
  @IsNotEmpty()
  schemaKey: string;
  schemaName?: string;
  schemaFile?: string;
  updateTime?: Date;
  createTime?: Date;
}