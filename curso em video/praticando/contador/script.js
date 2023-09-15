const value = document.getElementById("value");

function onIncrement() {
  value.innerHTML = `${parseInt(value.innerText) + 1}`;
}

function onDecrement() {
  value.innerHTML = `${parseInt(value.innerText) - 1}`;
}
