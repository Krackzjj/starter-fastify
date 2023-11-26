import { env } from "./env-config.ts";
import mariadb from "mariadb";

export class DATABASE {
    private static instance: DATABASE;
    private pool: mariadb.Pool | undefined;
    private connection: mariadb.PoolConnection | undefined;

    private constructor() {
        this.pool = mariadb.createPool({
            host: env.DB_HOST,
            port: parseInt(env.DB_PORT),
            user: env.DB_USER,
            password: env.DB_PASSWORD,
            database: env.DB_DATABASE,
            namedPlaceholders: true,
        });
    }

    public static Instance(): DATABASE {
        if (!DATABASE.instance) {
            DATABASE.instance = new DATABASE();
        }
        return DATABASE.instance;
    }

    public async getConnection(): Promise<mariadb.PoolConnection | undefined> {
        try {
            this.connection = await this.pool?.getConnection();
            console.log(`[DATABASE] Connected to database ${env.DB_DATABASE}`);
            return this.connection;
        } catch (error) {
            console.log(`[DATABASE] Error connecting to database ${env.DB_DATABASE}`);
            console.log(error);
            return undefined;
        }
    }

    public async closeConnection(): Promise<void> {
        try {
            await this.connection?.release();
            console.log(`[DATABASE] Connection to database ${env.DB_DATABASE} closed`);
        } catch (error) {
            console.log(`[DATABASE] Error closing connection to database ${env.DB_DATABASE}`);
            console.log(error);
        }
    }

}