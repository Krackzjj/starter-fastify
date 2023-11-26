import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const router = (server: FastifyInstance, opts: any, done: any) => {
    server.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return { hello: "from routeur in another files" };
    });

    done();
}