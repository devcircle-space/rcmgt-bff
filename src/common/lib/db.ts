import { connect } from 'mongoose';
import logger from './logger';

export async function initDb() {
  try {
    await connect(process.env.DATABASE_URL as string);
    logger.info('Database connected');
  } catch (error) {
    logger.error('Error connecting to the database: ', error);
  }
}
