// Importar Express
const express = require("express");

// Importar habdlebars como template engine
const exphbs = require("express-handlebars");

// Crear un servidor express
const app = express();

// Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs"}));

app.set("view engine", "hbs");

// Crear una ruta
app.get("/", (req, res, next) => {
    res. render("formulario_examen");
});

// Inicializar puerto
app.listen(4000, () =>{
    console.log("Servidor ejecutandose en el puerto 4000");
});