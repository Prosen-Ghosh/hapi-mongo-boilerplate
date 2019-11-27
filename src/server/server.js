'use strict';
import Hapi from '@hapi/hapi';
import { ServerConfig } from './../../config';

export default async () => {

    const server = Hapi.server({
        port: ServerConfig.port,
        host: ServerConfig.host
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});