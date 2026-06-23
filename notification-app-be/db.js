const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "notifications_db",
    password: "MYSQLramya31",
    port: 5432
});

module.exports = pool;