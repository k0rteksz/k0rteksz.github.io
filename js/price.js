function sendOrderData() {
    let message = document.querySelector('#message');
    let extra = parseInt(document.querySelector('[name=extra]:checked').value, 10);
    let sauce = parseInt(document.querySelector('#sauce').value, 10);
    let quantity = parseInt(document.querySelector('#quantity').value, 10);

   
     const price = (1200 + extra + sauce) * quantity;
     message.innerText = price;
    
}