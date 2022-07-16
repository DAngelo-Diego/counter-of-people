let num = document.getElementById("number");
let entered = document.getElementById("people");
let count = 0;

function increment() {
  count += 1;
  num.textContent = count;
}

function save() {
  let saves = count + " - ";
  entered.textContent += saves;
  num.textContent = 0;
  count = 0;
}

function clean() {
  entered.textContent = "";
  num.textContent = "0";
}
