import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { MyLoggerService } from './my-logger/my-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useLogger(app.get(MyLoggerService));
  app.enableCors(); // this opens up for everyone
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
