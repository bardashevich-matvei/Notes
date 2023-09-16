import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './utils/error-handler.utils';
import { MongoExceptionFilter } from './utils/mongo-handler.utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  app.useGlobalFilters(new HttpExceptionFilter(), new MongoExceptionFilter());
  app.setGlobalPrefix('api');
  // TODO add parsers, logger, cors and api prefix
  await app.listen(3000);
}
bootstrap();
