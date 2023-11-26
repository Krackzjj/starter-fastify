import { fastify } from 'fastify';
import cors from '@fastify/cors';

import { router } from './routes/routes.ts';

const server = fastify();

server.register(cors, {
    origin: '*',
})
server.register(router);
server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});