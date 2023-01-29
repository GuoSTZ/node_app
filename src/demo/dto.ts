import { IsNotEmpty, IsString } from 'class-validator';

export class DemoDto {
  @IsNotEmpty()
  id: number|string;
  name?: string;
}

export class DemoDtoByName {
  @IsNotEmpty()
  @IsString()
  name: string;
}