const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname,"./public"); //recibe la ruta donde se encuentra la carpeta de archivos publicos
app.use( express.static(publicPath) );

app.listen(3000,()=>{
    console.log("Servidor corriendo en el puerto 3000");
})

//para mostrar en el navegador

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
})

app.get("/register",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
})

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
})