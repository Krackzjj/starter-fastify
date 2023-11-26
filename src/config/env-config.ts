import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production", "test"]).default("production"),
    DB_CLIENT: z.string().default("mariadb"),
    DB_HOST: z.string().default("localhost"),
    DB_PORT: z.string().default("3306"),
    DB_USER: z.string().default("root"),
    DB_PASSWORD: z.string(),
    DB_DATABASE: z.string(),
});

export const env = envSchema.parse(process.env);
