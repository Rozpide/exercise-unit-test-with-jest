// ahora importo las funciones sum, fromEuroToDollar....y otras del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

// Comenzamos con la  primera prueba, dentro (descripcion de la prueba, funcion())
test('adds 14 + 9 to equal 23', () => {
    // Dentro creamos una variable que sera--> función sum con 2 números.
    let total = sum(14, 9);

    // comparamos que la suma de esos 2 números sea --> 23 (calculado a mano)
    expect(total).toBe(23);
});

   // comenzamos con la segunda prueba, con la misma estructura que la primera
test("One euro should be 1.07 dollars", function() {
    // llamamos a la funcion fromEuroToDollar con un parametro-valor de 3.5 euros
    const dollars  = fromEuroToDollar(3.5);
    //sabemos que 1 euro son 1.07 dollars
    // Si 1 euro son 1.07 dólares,lo expected entonces con 3.5 euros, debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBeCloseTo(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test('Convertir 50 USD a yenes japoneses', () => {
    const result = fromDollarToYen(50);
    expect(result).toBeCloseTo(7313.08, 2); // manejamos valores aproximados con *toBeCloseTo*, le digo que utilice 2 decimales de aproximacion
});
    // tercera prueba misma sintaxis, probamos con el valor de 0 dolares
test('Convertir 0 USD a yenes japoneses', () => {
    //llamamos a la funcion fromDollarToYen y almaceno el resultado en result
    const result = fromDollarToYen(0);
    expect(result).toBe(0);//comparamos que el resultado sea 0
});
test('Convertir 1000 JPY a libras esterlinas', () => {
    const result = fromYenToPound(1000);
    expect(result).toBeCloseTo(5.56, 2); // Valor aproximado de 2 decimales
});

test('Convertir 5000 JPY a libras esterlinas', () => {
    const result = fromYenToPound(5000);
    expect(result).toBeCloseTo(27.79552, 2); // Valor aproximado de 2 decimales
});
// testeamos 0 yenes a libras
test('Convertir 0 JPY a libras esterlinas', () => {
    const result = fromYenToPound(0);
    expect(result).toBe(0);
});
