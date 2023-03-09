import { Controller, Get, Post, Body, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UserService } from './service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('gs/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('isLogin')
  isLogin() {
    return this.userService.isLogin();
  }

  @Post('login')
  login(@Body() createUserDto: CreateUserDto) {
    return this.userService.login(createUserDto);
  }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }
}
