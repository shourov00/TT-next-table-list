import * as dotenv from 'dotenv';
dotenv.config();

export const CONFIG = {
  PORT: Number(process.env.PORT) || 3730,
  API_PREFIX: process.env.API_PREFIX || 'api',
  APP_FALLBACK_LANGUAGE: process.env.APP_FALLBACK_LANGUAGE || 'en',
  APP_HEADER_LANGUAGE: process.env.APP_HEADER_LANGUAGE || 'x-custom-lang',
};

export const DATABASE = {
  URL: process.env.DATABASE_URL,
  HOST: process.env.DATABSE_HOST || 'localhost',
  PORT: Number(process.env.DATABSE_PORT) || 5432,
  DB_NAME: process.env.DATABSE_NAME || 'test_db',
  USER: process.env.DATABSE_USER || 'postgres',
  PASSWORD: process.env.DATABSE_PASSWORD || 'root',
};