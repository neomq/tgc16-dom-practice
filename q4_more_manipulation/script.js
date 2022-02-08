let header = document.querySelector('h1');
header.style.color = "green";

let finish = document.querySelector('li.finished');
finish.innerText = "Repay credit card debt";

let urgent = document.querySelector('li#urgent');
urgent.style.border = "2px solid black";

let firstemphasis = document.querySelector('span.emphasis');
firstemphasis.style.textDecoration = "underline";

let emphasis = document.querySelector('p.emphasis');
emphasis.style.backgroundColor = "orange";
emphasis.style.fontSize = "32px";
emphasis.style.lineHeight = "24px";

document.querySelector('li#urgent span.todo').style.backgroundColor = "yellow";

document.querySelector('h2').innerHTML = `<span class="greetings">About Us</span>`;