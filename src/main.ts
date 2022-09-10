import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:8080', 'https://foodrand.hopto.org'],
    methods: ['POST', 'PUT', 'GET', 'DELETE']
  })
  app.use('/images', express.static(join(__dirname, '..', 'images')));
  await app.listen(3000);
  //Demo DevOPs
}
bootstrap();
