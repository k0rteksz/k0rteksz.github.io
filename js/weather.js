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
};