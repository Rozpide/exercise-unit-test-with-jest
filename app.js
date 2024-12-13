//Creamos las funciones de la aplicacion
// Declaramos una función sum que suma 2 numeros( a y b)
function sum(a,b){
    return  a+b;
}    

// funcion que convierte un valos en dolares a yenes
const fromDollarToYen = function(valueInDollar) {
    //tasas de conversion conocidas desde oneEuroIs
    let oneEuroIs = {
        "JPY": 156.5, // japan yen
        "USD": 1.07, // us dollar
        "GBP": 0.87, // british pound
    }
    //divido el valor en dolares por la tasa de conversion de USD a EUR
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    //multiplico el valor en euros que da, por la tasa de conversion de EUR a JPY
    let valueYen = valueInEuro * oneEuroIs.JPY;
    //devuelve el valor en yenes
    return valueYen;
}
// funcion que convierte euros a dolares
const fromEuroToDollar = function(valueInEuro) {
    // tasa de conversión
    let oneEuroIs = {
        "JPY": 156.5, // japan yen
        "USD": 1.07, // us dollar
        "GBP": 0.87, // british pound
    }
    // Convertimos el valor de euros a dólares al multiplicarlo por 1.07
    let valueInDollar = valueInEuro * 1.07;
    //Retornamos el valor en dólares
    return valueInDollar;
}

// funcion que convierte el valor de yenes a libras
function fromYenToPound (valueYen){
    // tasas de conversion
    let oneEuroIs = {
        "JPY": 156.5, // japan yen
        "USD": 1.07, // us dollar
        "GBP": 0.87, // british pound
    }
    //primero pasamos yenes a euros para despues pasarlos a libras
    let valueInEuro = valueYen / oneEuroIs.JPY;
    let pounds = valueInEuro * oneEuroIs.GBP;
    return pounds;
}
console.log(fromDollarToYen(100)); // Debería devolver el valor equivalente en yenes japoneses
console.log(fromEuroToDollar(50)); // Debería devolver el valor equivalente en dólares estadounidenses
console.log(fromYenToPound(1000)); // Debería devolver el valor equivalente en libras esterlinas*/
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound }
   