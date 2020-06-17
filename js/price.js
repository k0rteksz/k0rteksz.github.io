function calcPrice() {
    
    let count = parseInt(document.querySelector("input[name='count']"));
    let sauce = parseInt(document.querySelector("input[name='sauce']"));
    let extra = parseInt(document.querySelector("[name-extra]:checked"));
    let price = parseInt(1200 + sauce + extra) * count;
    let cost = document.querySelector("span.show-price");
    
    cost.innerHTML=price;
}