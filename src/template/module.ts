import { Module } from '@nestjs/common';
import { TestService } from './service';
import { TestController } from './controller';

@Module({
  providers: [TestService],
  controllers: [TestController]
})
export class TestModule {}
