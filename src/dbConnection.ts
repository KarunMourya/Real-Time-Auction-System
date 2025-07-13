import { Sequelize } from 'sequelize';
import { env } from './config/env';

const sequelize = new Sequelize(env.DB_DATABASENAME, env.DB_USERNAME, env.DB_PASSWORD, {
  host: env.HOST,
  dialect: 'postgres',
});


export const dbConnection = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
};

export default sequelize;
