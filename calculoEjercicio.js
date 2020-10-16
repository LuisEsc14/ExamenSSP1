// Calculos para el ejercicio
exports.calcularEjercicio = (capital, tazaInteres, plazo) => {

    let capitalAmortizado = 0;
    let interes = 0;
    let mes = 0;
    let tasaInteresDecimal = tazaInteres / 100;
    const amortizacion = []; 
    let saldoFinal = 0;

    // Transformar los años en meses
    plazo = Math.round(plazo * 12);

    // Calculo formula
    
    while (mes != plazo) {
        

        //Calculo del interes por periodo
        interes = (capital * tasaInteresDecimal);
        interes = interes.toFixed(2);

        // Calculo saldo final por periodo
        saldoFinal = (capital + interes);
        
        //Actualizar el mes(periodo)
        mes++;

        amortizacion.push({
            mes,
            capital,
            interes,
            saldoFinal,
        });
    }
    console.log(capital, interes, plazo);
    console.log(amortizacion);
    return amortizacion;
}
