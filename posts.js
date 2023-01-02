require('dotenv').config()

const { Pool } = require('pg')

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "pacidodie02",
    database: "likeme",
    allowExitOnIdle: true,
});

const getAllPosts = async() => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

const createPost = async (payload) => {
  const consulta =
    "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3)RETURNING * ";
  const values = [payload.titulo, payload.url, payload.descripcion];
  const result = await pool.query(consulta, values);
};

module.exports = { getAllPosts, createPost };
