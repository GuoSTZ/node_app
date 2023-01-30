import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity'
import { DemoService } from './service';
import { DemoController } from './controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [DemoService],
  controllers: [DemoController]
})
export class DemoModule {}
