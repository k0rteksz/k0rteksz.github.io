function sendOrderData() {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const address = document.querySelector("#address").value.trim();
    const comment = document.querySelector("#comment").value.trim();
    const message = document.querySelector('#message');
    const extra = parseInt(document.querySelector('[name=extra]:checked').value, 10);
    const sauce = parseInt(document.querySelector('#sauce').value, 10);
    const quantity = parseInt(document.querySelector('#quantity').value, 10);

    if (!name) {
        alert ("Név megadása kötelező!");
    } else if (!email || !(email.indexOf('@') > 0 ) ||!(email.indexOf('.') > 0 )) {
        alert ("Hibás e-mail cím!");
    } else if (!address || !(address.length > 10)) {
        alert ("Túl rövid cím!");
    } else if (comment.indexOf('<') > 0 && comment.indexOf('>') > 0 ) {
        alert ("Nem megengedett karaktert tartalmaz!")
    } else if (!quantity || quantity < 1 || quantity > 10) {
        alert ("Minimum 1 de maximum 10 db terméket vásárolhatsz!")
    } else {
        let price = (1200 + extra + sauce) * quantity; 

        if (price < 5000) {
            price += 500;
        }
       return  message.innerHTML = price;
      
    }
            
    }