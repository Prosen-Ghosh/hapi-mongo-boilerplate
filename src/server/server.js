'use strict';
import Hapi from '@hapi/hapi';
import { ServerConfig } from './../../config';
import HapiRouter from './../module/router';

export default async () => {

    const server = Hapi.server({
        port: ServerConfig.port,
        host: ServerConfig.host
    });

    await server.register({
        plugin: HapiRouter,
        options: {
            routes: './src/**/route.js'
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});