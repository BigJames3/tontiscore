import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
const app = await NestFactory.create(AppModule);
app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
app.enableCors();
await app.listen(process.env.PORT || 3000);
console.log('Server running on', await app.getUrl());
}
bootstrap();