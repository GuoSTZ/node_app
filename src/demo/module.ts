import { Module } from '@nestjs/common';
import { DemoService } from './service';
import { DemoController } from './controller';

@Module({
  providers: [DemoService],
  controllers: [DemoController]
})
export class DemoModule {}
