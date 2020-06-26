function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amount = parseInt(amountInput.value) * price;
    let showAmount=document.querySelector("span.show-amount");

    showAmount.innerHTML=amount;
}

function weatherWidget() {
    const day = document.querySelector('#days').value;
    const temperatureDiv = document.querySelector('#temp');
    temperatureDiv.innerHTML = temperatures[day] + '&deg;C';
    for (let i = 0; i < temperatureUpperLimits.length; i++ ) {
        if (temperatures[day] <= temperatureUpperLimits[i]) {
            temperatureDiv.innerHTML += "<br>" + offers[i];
            break;
        }
    }
}