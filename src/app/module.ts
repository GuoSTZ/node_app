import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { AppService } from './service';
import { DemoModule } from '../demo/module';

@Module({
  imports: [DemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
