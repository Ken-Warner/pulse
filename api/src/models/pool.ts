import pg from "pg";

const { Pool } = pg;

export const DEFAULT = Symbol("default");

export const pool = new Pool({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_DATABASE || "postgres",
  port: Number(process.env.DB_PORT) || 5432,
});

export async function query(args: {
  text: string;
  params?: unknown[];
}): Promise<pg.QueryResult> {
  return new Promise((resolve, reject) => {
    if (!args.text) {
      reject({ message: "Invalid query" });
      return;
    }

    const params = args.params ?? [];
    pool.query(args.text, params, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
}
