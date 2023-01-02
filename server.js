const express = require("express");
const app = express();
const cors = require("cors");
const { getAllPosts, createPost } = require('./posts');

require("dotenv").config({ path: "./.env_example" });


app.use(express.json());
app.use(cors());

app.use(express.static("public"));


app.use(express.json()) //middleware para parsear el cuerpo de la consulta
app.use(express.static("public")); //middleware para servir archivos estáticos

//Envia archivo a mostrar en el Home
app.get("/", (req, res) => {
  try {
    res.sendFile();
  } catch (error) {
    res.json({ message: "No se encuentra el recurso que estas solicitando" });
  }
});





