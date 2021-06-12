import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connection from './lib/database/connection';
import loadendpoints from './routes';
import logger from './lib/logger/logger';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 9098;
const DATABASE_CONNECTION = process.env.MONGODB_URI_V1;

app.route('/').get((req, res) => {
    res.send("<b>AF Final - Backend API - IT19104218</b>");
});

app.listen(PORT, () => {
    logger.info(`Server start running on PORT ${PORT}`);
    connection(DATABASE_CONNECTION);
    loadendpoints(app);
});