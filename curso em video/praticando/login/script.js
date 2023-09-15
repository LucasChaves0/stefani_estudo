const user = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");

let data = {};

function register() {
  if (
    user.value.length != 0 &&
    email.value.length != 0 &&
    password.value.length != 0
  ) {
    if (passwordConfirm.value === password.value) {
      data.user = user.value;
      data.email = email.value;
      data.password = password.value;

      console.log(data);
    } else {
      alert("Senhas não correspondem!");
    }
  } else {
    alert("Faltam dados a serem preenchidos! Preencha para continuar.");
  }

  form.reset();
}
