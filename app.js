// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
function sum (a,b){
    return a+b
}
let oneEurols = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromDollarToYen = function(valueInEuro) {
    let valueInEuro = 0.9345
    let valueYen = valueInEuro * 156.5
    return valueYen
}/*
function fromEuroToDollar (euros){
    let dollars = euros * oneEurols.USD;
    return dollars
}*/
function fromYenToPound (yenes){
    let euros = yenes / oneEurols.JPY;
    let pounds = euros * oneEurols.GBP;
    return pounds;
}
console.log(fromDollarToYen(100)); // Debería devolver el valor equivalente en yenes japoneses
console.log(fromEuroToDollar(50)); // Debería devolver el valor equivalente en dólares estadounidenses
console.log(fromYenToPound(1000)); // Debería devolver el valor equivalente en libras esterlinas*/
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound }
   