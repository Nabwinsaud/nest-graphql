import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envConfig } from 'src/env.config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(envConfig.PORT);
  console.log(`server running at http://localhost:${envConfig.PORT}`);
}
bootstrap();
