import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controller';
import { AppService } from './service';
import { DemoModule } from '../demo/module';
import { UserModule } from '../user/module';

@Module({
  imports: [
    DemoModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      // host: '114.116.6.135',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'demo',
      autoLoadEntities: true, // 自动化 load entity 文件, 所有在 Module 中引用的 Entity 文件会被自动加载
      synchronize: true, // 自动化同步表，本地可自动打开，线上数据库不建议打开
      timezone: "08:00",
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
