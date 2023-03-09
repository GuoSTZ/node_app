import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person, Schema } from './entity'
import { DemoService } from './service';
import { DemoController } from './controller';

@Module({
  imports: [TypeOrmModule.forFeature([Person]), TypeOrmModule.forFeature([Schema])],
  providers: [DemoService],
  controllers: [DemoController]
})
export class DemoModule {}
