require('dotenv').config()

const { Pool } = require('pg')

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "pacidodie02",
    database: "likeme",
    allowExitOnIdle: true,
});


