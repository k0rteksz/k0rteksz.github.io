function calcPrice() {
    
    let count = parseInt(document.querySelector("#count").value, 10);
    let sauce = parseInt(document.querySelector("#sauce").value, 10);
    let extra = parseInt(document.querySelector("[name-extra]:checked").value, 10);
    let price = parseInt(1200 + sauce + extra) * count;
    let cost = document.querySelector("span.show-price");
    
    cost.innerHTML=price;
}