// Importar Express
const express = require("express");

// Crear un servidor express
const app = express();

// Crear una ruta
app.get("/", (req, res, next) => {
    res. send("Bienvenido!");
});

// Inicializar puerto
app.listen(4000, () =>{
    console.log("Servidor ejecutandose en el puerto 4000");
});