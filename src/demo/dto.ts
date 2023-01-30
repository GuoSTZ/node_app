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