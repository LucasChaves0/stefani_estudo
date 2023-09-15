function multiplicationTable() {
  let num = document.getElementById("textnumber");
  let mtable = document.getElementById("mtable");

  if (num.value.length == 0) {
    alert("Por favor, digite um número!");
  } else {
    let n = Number(num.value);
    mtable.innerHTML = "";
    for (c = 1; c <= 10; c++) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `table${c}`;
      mtable.appendChild(item);
    }
  }
}
