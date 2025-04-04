import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { env } from "~/env";
import * as schema from "./schema"; // Import your schema

const sql = neon(env.POSTGRES_URL as string);
export const db = drizzle(sql, { schema }); // Pass schema
