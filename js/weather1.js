/* let temperatures = [11.2, 14.4, 13.0, 17.3, 16.9, 18.2, 16.5];
let temperatureUpperLimits = [0, 15, 20, 25, 30];
let offers = ["Ma forró csokit is árusítunk!",
    "Melegedj át egy teával nálunk!",
    "Ma finom sütivel várunk!",
    "Ma fagyit is kínálunk!",
    "Hűsítsd le magad egy jéghideg limonádéval!"] */

    let getWeatherdata = {
        "weathers": [
            {
                "dayNumeber": 0,
                "temperature": -11.2
            },
    
            {
                "dayNumeber": 1,
                "temperature": 1.2
            },
            {
                "dayNumeber": 2,
                "temperature": 11.2
            },
            {
                "dayNumeber": 3,
                "temperature": 15.2
            },
            {
                "dayNumeber": 4,
                "temperature": 21.2
            },
            {
                "dayNumeber": 5,
                "temperature": 26.2
            },
            {
                "dayNumeber": 6,
                "temperature": 31.2
            },
    
        ],
        "offers": [
            {
                "upperLimit": 0,
                "offerMessage": "Ma forró csokit is árusítunk"
            },
            {
                "upperLimit": 15,
                "offerMessage": "Melegedj át egy teával nálunk"
            },
            {
                "upperLimit": 20,
                "offerMessage": "Ma fino sütivel várunk"
            },
            {
                "upperLimit": 25,
                "offerMessage": "Ma fagyit is kínálunk"
            },
            {
                "upperLimit": 30,
                "offerMessage": "Hűsítsd le magad egy jéghideg limonádéval"
            },
    
        ]
    }


window.onload = function () {
    weatherWidget();
    minimumTemp();
    maximumTemp();
    averageTemp();
}

/* var data = getWeatherData(); */

function weatherWidget() {
    const day = document.querySelector('#days').value;
    const temperaturesDiv = document.querySelector('#temp');
    const temperature = findWeather(day).temperature;
    const offerMessage = findOffer(temperature).offerMessage;
    temperaturesDiv.innerHTML = temperature + '&deg;C';
    temperaturesDiv.innerHTML += '<br><span class="offer">' + offerMessage + '</span>';
    displayminimumTemp();
    displayaverageTemp();
    displaymaximumTemp();
    
        }

function findWeather(day) {
    for (let weather of data.weathers) {
        if (weather.dayNumber == day) {
            return weather;
        }
    }
}

function findOffer(temperature) {
    for (let offer of data.offers) {
        if (temperature <= offer.upperLimit) {
            return offer;
            
        }
    }
}




function minimumTemp() {
    let minimum = data.weathers.length != 0 ? data.weathers[0].temperature : 0;
    let minP = document.querySelector('#min');  
    minP.innerHTML = "Minimum: " + minimum;
    for (let i = 0; i < data.weathers.length; i++) {
        if (data.weathers[i].temperature < minimum) {
            minimum = data.weathers[i].temperature;
        }
        
    }
    return minimum;
    
}
function maximumTemp() {
    let maximum = data.weathers.length != 0 ? data.weathers[0].temperature : 0;
    let maxP = document.querySelector('#max');  
    maxP.innerHTML = "Maximum: " + maximum;
    for (let i = 0; i < data.weathers.length; i++) {
        if (data.weathers[i].temperature > maximum) {
            maximum = data.weathers[i].temperature;
        }
        
    }
    return maximum;
    
}

function averageTemp() {
    let avg = 0;
    let avgP = document.querySelector('#avg');
    for (let i = 0; i < data.weathers.length; i++) {
        avg += datam.weathers[i].temperature;
        
    }
    return avgP.innerHTML ="Átlag: " + parseInt(data.weathers.length != 0 ? avg / data.weathers.length : 0);
}


