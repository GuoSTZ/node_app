import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  id: number;
  @IsNotEmpty()
  username: string; // 用户名
  @IsNotEmpty()
  password: string;  // 密码
  avatar: string;   //头像
  email: string;
  role: string;   // 用户角色
  createTime: Date;
  updateTime: Date;
}
