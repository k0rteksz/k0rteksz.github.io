var temperatures = [11.2, 14.4, 13.0, 17.3, 16.9, 18.2, 16.5];
var temperatureUpperLimits = [0, 15, 20, 25, 30];
var offers = ["Ma forró csokit is árusítunk!",
    "Melegedj át egy teával nálunk!",
    "Ma finom sütivel várunk!",
    "Ma fagyit is kínálunk!",
    "Hűsítsd le magad egy jéghideg limonádéval!"]

function weatherWidget() {
    const day = document.querySelector('#days').value;
    const temperaturesDiv = document.querySelector('#temp');
    temperaturesDiv.innerHTML = temperatures[day] + '&deg;C';
    for (i=0; i < temperatureUpperLimits.length; i++) {
        if (temperatures[day] <= temperatureUpperLimits[i]){
            temperaturesDiv.innerHTML += '<br>' + offers[i];
            break;
        }
    }

}

window.onload = function () {
    weatherWidget();
    minimumTemp();
    maximumTemp();
    averageTemp();
}

function minimumTemp() {
    let minimum = temperatures.length != 0 ? temperatures[0] : 0;
    let minP = document.querySelector('#min');  
    minP.innerHTML = "Minimum: " + minimum;
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] < minimum) {
            minimum = temperatures[i];
        }
        
    }
    return minimum;
    
}
function maximumTemp() {
    let maximum = temperatures.length != 0 ? temperatures[0] : 0;
    let maxP = document.querySelector('#max');  
    maxP.innerHTML = "Maximum: " + maximum;
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] > maximum) {
            maximum = temperatures[i];
        }
        
    }
    return maximum;
    
}

function averageTemp() {
    let avg = 0;
    let avgP = document.querySelector('#avg');
    for (let i = 0; i < temperatures.length; i++) {
        avg += temperatures[i];
        
    }
    return avgP.innerHTML ="Átlag: " + parseInt(temperatures.length != 0 ? avg / temperatures.length : 0);
}
