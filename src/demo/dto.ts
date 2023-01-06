import { IsNotEmpty, IsString } from 'class-validator';

export class DemoDto {
  name?: string;
}

export class DemoDtoByName {
  @IsNotEmpty()
  @IsString()
  name: string;
}