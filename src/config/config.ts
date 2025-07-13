// config/config.ts
import 'dotenv/config';

export default {
  development: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASENAME || 'postgres',
    host: process.env.HOST || '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: null,
    database: 'test_db',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASENAME,
    host: process.env.HOST,
    dialect: 'postgres',
  },
};
