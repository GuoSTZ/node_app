import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app/module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger(),
    cors: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  
  const port = 3000;
  await app.listen(port);

  console.log(`当前运行环境：http://localhost:${port}`)
}

bootstrap();
