// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test('Convertir 100 USD a yenes japoneses', () => {
    const result = fromDollarToYen(100);
    expect(result).toBeCloseTo(14626.17, 2); // Valor aproximado
});

test('Convertir 50 USD a yenes japoneses', () => {
    const result = fromDollarToYen(50);
    expect(result).toBeCloseTo(7313.08, 2); // Valor aproximado
});

test('Convertir 0 USD a yenes japoneses', () => {
    const result = fromDollarToYen(0);
    expect(result).toBe(0);
});
test('Convertir 1000 JPY a libras esterlinas', () => {
    const result = fromYenToPound(1000);
    expect(result).toBeCloseTo(5.56, 2); // Valor aproximado
});

test('Convertir 5000 JPY a libras esterlinas', () => {
    const result = fromYenToPound(5000);
    expect(result).toBeCloseTo(27.78, 2); // Valor aproximado
});

test('Convertir 0 JPY a libras esterlinas', () => {
    const result = fromYenToPound(0);
    expect(result).toBe(0);
});
