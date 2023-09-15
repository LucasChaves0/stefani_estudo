function couting() {
  let textstart = document.getElementById("start");
  let textend = document.getElementById("end");
  let textstep = document.getElementById("step");
  let textresult = document.getElementById("result");

  if (
    textstart.value.length == 0 ||
    textend.value.length == 0 ||
    textstep.value.length == 0
  ) {
    result.innerHTML = "Impossível contar! Faltam dados.";
  } else {
    result.innerHTML = "Contando: ";
    let start = Number(textstart.value);
    let end = Number(textend.value);
    let step = Number(textstep.value);

    if (step <= 0) {
      alert("Passo inválido! Considerando PASSO 1");
      step = 1;
    }
    if (start < end) {
      //contagem crescente
      for (let c = start; c <= end; c += step) {
        result.innerHTML += `${c} \u{1F449} `;
      }
      //contagem regressiva
    } else {
      for (let c = start; c >= end; c -= step) {
        result.innerHTML += `${c} \u{1F449} `;
      }
    }
    result.innerHTML += `\u{1F3C1}`;
  }
}
