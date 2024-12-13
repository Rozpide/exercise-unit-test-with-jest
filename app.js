// Declaramos una función con el nombre exacto "fromEuroToDollar"
function sum(a,b){
    return  a+b;
}    


const fromDollarToYen = function(valueInDollar) {
    let oneEuroIs = {
        "JPY": 156.5, // japan yen
        "USD": 1.07, // us dollar
        "GBP": 0.87, // british pound
    }
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valueYen = valueInEuro * oneEuroIs.JPY;
    return valueYen;
}

const fromEuroToDollar = function(valueInEuro) {
    let oneEuroIs = {
        "JPY": 156.5, // japan yen
        "USD": 1.07, // us dollar
        "GBP": 0.87, // british pound
    }
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


function fromYenToPound (valueYen){
    
    let oneEuroIs = {
        "JPY": 156.5, // japan yen
        "USD": 1.07, // us dollar
        "GBP": 0.87, // british pound
    }
    let valueInEuro = valueYen / oneEuroIs.JPY;
    let pounds = valueInEuro * oneEuroIs.GBP;
    return pounds;
}
console.log(fromDollarToYen(100)); // Debería devolver el valor equivalente en yenes japoneses
console.log(fromEuroToDollar(50)); // Debería devolver el valor equivalente en dólares estadounidenses
console.log(fromYenToPound(1000)); // Debería devolver el valor equivalente en libras esterlinas*/
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound }
   