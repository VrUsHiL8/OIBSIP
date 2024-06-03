function convertTemperature() {
    var temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    var fromUnit = document.getElementById("fromUnitSelect").value;
    var toUnit = document.getElementById("toUnitSelect").value;
    var resultContainer = document.getElementById("result");
    var result;

    if (isNaN(temperatureInput)) {
        resultContainer.innerHTML = "Please enter a valid temperature.";
        return;
    }

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (temperatureInput * 9/5) + 32;
        resultContainer.innerHTML = temperatureInput + " Celsius = " + result.toFixed(2) + " Fahrenheit";
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (temperatureInput - 32) * 5/9;
        resultContainer.innerHTML = temperatureInput + " Fahrenheit = " + result.toFixed(2) + " Celsius";
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = temperatureInput + 273.15;
        resultContainer.innerHTML = temperatureInput + " Celsius = " + result.toFixed(2) + " Kelvin";
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = temperatureInput - 273.15;
        resultContainer.innerHTML = temperatureInput + " Kelvin = " + result.toFixed(2) + " Celsius";
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (temperatureInput - 32) * 5/9 + 273.15;
        resultContainer.innerHTML = temperatureInput + " Fahrenheit = " + result.toFixed(2) + " Kelvin";
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (temperatureInput - 273.15) * 9/5 + 32;
        resultContainer.innerHTML = temperatureInput + " Kelvin = " + result.toFixed(2) + " Fahrenheit";
    } else {
        resultContainer.innerHTML = "Please select different units to convert.";
    }
}

function clearInput() {
    document.getElementById("temperatureInput").value = "";
    document.getElementById("result").innerHTML = "";
}
