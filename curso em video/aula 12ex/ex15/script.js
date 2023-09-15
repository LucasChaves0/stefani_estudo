function verificar() {
  let date = new Date();
  let year = date.getFullYear();
  let formYear = document.getElementById("textyear");
  let result = document.getElementById("result");

  if (formYear.value.length == 0 || Number(formYear.value) > year) {
    //Verifica na primeira condição se a caixa está vazia e se o valor é acima de ano na segunda condição
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    let formSex = document.getElementsByName("radsex");
    let age = year - Number(formYear.value);
    let gender = "";
    if (formSex[0].checked) {
      gender = "HOMEM";
    } else if (formSex[1].checked) {
      gender = "MULHER";
    }
    result.style.textAlign = "center";
    result.innerHTML = `Detectamos ${gender} com ${age} anos.`;
  }
}
