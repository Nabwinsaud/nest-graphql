import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envConfig } from 'src/env.config';
// import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(envConfig.PORT);
  console.log(`server running at http://localhost:${envConfig.PORT}/graphql`);
}
bootstrap();
