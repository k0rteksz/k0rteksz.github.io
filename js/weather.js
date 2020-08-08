var temperatures = [11.2, 14.4, 13.0, 17.3, 16.9, 18.2, 16.5];
let temperatureUpperLimits = [0, 15, 20, 25, 30];
let offers = ["Ma forró csokit is árusítunk!",
    "Melegedj át egy teával nálunk!",
    "Ma finom sütivel várunk!",
    "Ma fagyit is kínálunk!",
    "Hűsítsd le magad egy jéghideg limonádéval!"]

function weatherWidget() {
    const day = document.querySelector('#day').value;
    const temperatureDiv = document.querySelector('#temperature');
    temperatureDiv.innerHTML = temperatures[day] + ' &deg;C';
    for (let i = 0; i < temperatureUpperLimits.length; i++) {
        if (temperatures[day] <= temperatureUpperLimits[i]) {
            temperatureDiv.innerHTML += '<br><span class="offer">' + offers[i] + '</span></br>';
            break;
        }
}

    
}