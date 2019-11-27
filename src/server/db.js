import Mongoose from 'mongoose'; // ODM
import { MongoConfig } from './../../config';

export default () => {
    Mongoose.connect(MongoConfig.uri(), MongoConfig.options()).then(() => {
            console.info(`YEAH! Connected to Database @ ${MongoConfig.uri()}`);
        }
    );

    const { connection } = Mongoose;

    connection.on('disconnected', () => {
        console.error(`!!!!!!!!!! Database Disconnected @ ${MongoConfig.uri()} !!!!!!!!!!`);
    });
    connection.on('reconnected', () => {
        console.warn(`!!!!!!!!!! Database Reconnected @ ${MongoConfig.uri()} !!!!!!!!!!`);
    });
    connection.on('error', (err) => {
        console.error('error', err);
    });
};
