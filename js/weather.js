var temperatures = [11.2, 14.4, 13.0, 17.3, 16.9, 18.2, 16.5];

function weatherWidget() {
    const day = document.querySelector('#days').value;
    const temperatureDiv = document.querySelector('#temp');
    temperatureDiv.innerHTML = temperatures[day] + '&deg;C';
}