function validate () {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const address = document.querySelector("#address").value.trim();
    const comment = document.querySelector("#comment").value.trim();
    const message = document.querySelector('#message');
    const extra = parseInt(document.querySelector('[name=extra]:checked').value, 10);
    const sauce = parseInt(document.querySelector('#sauce').value, 10);
    const quantity = parseInt(document.querySelector('#quantity').value, 10);
    personalValidate(name, email, address, comment);
    quantityValidate(quantity);
    calculatePrice(extra, sauce, quantity);
    message.innerHTML=price;
}

function personalValidate (name, email, address, comment) {
    if (!name) {
        alert("A név megadása kötelező!");
        return false;
    }
    if (!email || !(email.indexOf('@') > 0) || !(email.indexOf('.') > 0)) {
        alert("Invalid e-mail cím!");
        return false;
    }
    if (address.length < 10) {
        alert("A cím túl rövid!");
        return false;
    }
    if (comment.indexOf("<") >= 0 && comment.indexOf(">") >= 0) {
        alert("Nem megengedett karaktert tartalmaz!");
        return false;
     } 
        return true;
}

function quantityValidate (quantity) {
    if (quantity > 10 || quantity < 1 || isNaN(quantity)) {
        alert("Minimum 1 és maximum 10 db terméket vásárolhat!");
        return false;
     }
    return true;
}

function calculatePrice (extra, sauce, quantity) {
    price = (1200 + extra + sauce) * quantity;
     if (price < 5000) {
         price += 500;
     }
    return price;
}
