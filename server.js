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
//Endpoint para buscar los Posts
app.get('/posts', async (req, res) => {
  try {
    const getPosts = await getAllPosts();
    console.log(getPosts);
    res.json(getPosts);
  } catch (error) {
    console.log(error);
  }
});
//Endpoint para crear Posts
app.post("/posts", async (req, res) => {
    const payload = req.body;
    console.log(payload);

    if (!payload.titulo || !payload.url || !payload.descripcion) {
      console.log("los campos están vacios ");
      return res.send({ error: "los campos están vacios" });
    }
    const post = await createPost(payload);
    res.json(post);
});

//Levanta el Servidor 
app.listen(3000, console.log("SERVIDOR ENCENDIDO"));






