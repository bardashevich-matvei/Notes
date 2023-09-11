import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO add parsers, logger, cors and api prefix
  await app.listen(3000);
}
bootstrap();
