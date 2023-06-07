import dotenv from 'dotenv';
dotenv.config();
import { cleanEnv, str, num } from 'envalid';

export const envConfig = cleanEnv(process.env, {
  NODE_ENV: str(),
  PORT: num(),
  DB_HOST: str(),
  DB_PORT: num(),
  DB_USERNAME: str(),
  DB_PASSWORD: str(),
  DB_NAME: str(),
  JWT_SECRET: str(),
  JWT_EXPIRATION_TIME: str(),
  DATABASE_URL: str(),
});
