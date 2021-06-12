import mongoose from 'mongoose';
import logger from '../logger/logger';

function connection(databaseURI) {
    return mongoose.connect(databaseURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
        .then(() => {
            logger.info('Database Synced');
            return 'Database Synced';
        })
        .catch((error) => {
            logger.error(`Database Error: ${error.message}`);
            return 'Database Error';
        });
}

export default connection;