function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amount = parseInt(amountInput.value) * price;
    let showAmount=document.querySelector("span.show-amount");

    showAmount.innerHTML=amount;
}
