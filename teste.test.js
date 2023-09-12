const {conversorCelciusParaFahrenheit} = require("./conversor");
const {conversorFahrenheitParaCelsius} = require("./conversor");

test ('Conversão Celsius para Fahrenheit', () => {
    expect(conversorFahrenheitParaCelsius(0)).toBe(32);
    expect(conversorFahrenheitParaCelsius(100)).toBe(212);
    expect(conversorFahrenheitParaCelsiusF(50)).toBe(122);
});

test ('Conversão Fahrenheit para Celsius', () => {
    expect(conversorFahrenheitParaCelsius(32)).toBe(0);
    expect(conversorFahrenheitParaCelsius(212)).toBe(100);
    expect(conversorFahrenheitParaCelsius(122)).toBe(50);
});