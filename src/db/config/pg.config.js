export const pgConfig = {
    user: process.env.PG_USER || "postgres",
    pass: process.env.PG_PASS || "root",
    host: process.env.PG_HOST || "localhost",
    port: process.env.PG_PORT || "5432",
    db: process.env.PG_DB || "pg_rest"
}