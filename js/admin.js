let newUser = document.createElement("tr");
newUser.innerHTML = "új falhasználó";


let parent = document.querySelector("tbody:nth-child(2)");
parent.appendChild(newUser);