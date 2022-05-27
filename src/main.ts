import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:8080', 'https://foodrand.hopto.org'],
    methods: ['POST', 'PUT', 'GET', 'DELETE']
  })
  app.use(express.static('images'))
  await app.listen(3000);
}
bootstrap();
