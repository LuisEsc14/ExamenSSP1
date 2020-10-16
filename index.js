// Importar Express
const express = require("express");

// Importar habdlebars como template engine
const exphbs = require("express-handlebars");

// Importar body parser que nos permite acceder al cuerpo de la peticion HTTP
const bodyParser = require("body-parser");

// Importar la funcion del calculo del ejercicio
const { calcularEjercicio }  = require("./calculoEjercicio");

// Crear un servidor express
const app = express();

// Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs"}));

app.set("view engine", "hbs");

// Habilitar body parser para leer los datos del cuerpo de peticiones POST
app.use(bodyParser.urlencoded({ extended: true}));

// Crear una ruta para /
app.get("/", (req, res, next) => {
    res. render("formulario_examen");
});

app.post("/ejercicio", (req, res, next) => {
    // Asignacion por destructing
    const { capital, tazaInteres, plazo} = req.body;

    const amortizacion = calcularEjercicio(capital, tazaInteres, plazo);

    res.render("resultado_examen", { amortizacion });
});

// Inicializar puerto
app.listen(4000, () =>{
    console.log("Servidor ejecutandose en el puerto 4000");
});