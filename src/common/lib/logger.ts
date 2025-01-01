import { createLogger, format, LoggerOptions, transports } from 'winston';
import { randomUUID } from 'crypto';

const options: LoggerOptions = {
  level: 'info',
  format: format.json({ space: 2 }),
  defaultMeta: { timestamp: new Date().toISOString(), requestId: randomUUID() },
  transports: [
    new transports.File({ filename: 'error.log', level: 'error', dirname: '_logs' }),
    new transports.File({ filename: 'combined.log', dirname: '_logs' }),
  ],
};

const logger = createLogger(options);

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    })
  );
}
export default logger;
