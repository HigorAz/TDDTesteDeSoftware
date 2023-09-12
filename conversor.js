function conversorCelciusParaFahrenheit (Celsius){
    return Celsius * 1.8 + 32;
}

function conversorFahrenheitParaCelsius (Fahrenheit){
    return (Fahrenheit - 32) / 1.8
}

module.exports = {
	conversorCelciusParaFahrenheit, conversorFahrenheitParaCelsius
}