/*Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
*/

let escolha = prompt(`Qual área você pretende seguir? \n 1 - Front-End \n 2 - Back-End`);

if (escolha == 1) {
  let tecFront = prompt(`Qual tecnologia você gostaria de aprender? \n 1 - React \n 2 - Vue`);

  if (tecFront == 1) {
    alert('Legal! Você quer aprender React.');
  } else if (tecFront == 2) {
    alert('Legal! Você quer aprender Vue!');
  } else {
    alert('Você não digitou nenhuma opção válida.');
  }
} else if (escolha == 2) {
  let tecFront2 = prompt(`Qual tecnologia você gostaria de aprender? \n 1 - C# \n 2 - Java`);

  if (tecFront2 == 1) {
    alert('Legal! Você quer aprender C#!');
  } else if (tecFront2 == 2) {
    alert('Legal! Você quer aprender Java!');
  } else {
    alert('Você não digitou nenhuma opção válida.');
  }
}

let escolha2 = prompt(`Você gostaria de: \n 1 - Seguir se especializando na área escolhida \n 2 - Seguir se desenvolvendo para se tornar Fullstack`)

if(escolha2 == 1) {
  alert('Você quer seguir se especializando na área escolhida.');
} else if(escolha2 == 2) {
  alert('Você quer seguir se desenvolvendo para se tornar um Fullstack!');
}

let tecnologias = [];
let tecEscolhidas = document.getElementById('tecEscolhidas');

while(true) {
  let pergunta = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Responda "OK" caso sim ou "SAIR" para parar.');

  if(pergunta == 'OK') {
    let tecnologiasEsp = prompt('Quais as tecnologias você gostaria de se especializar?');
    tecnologias.push(tecnologiasEsp);
  } else if(pergunta == 'SAIR') {
    break;
  } else {
    alert('Por favor, digite uma opção válida.')
  }
}

tecEscolhidas.innerHTML = `Você gostaria de aprender as seguintes tecnologias: ${tecnologias} `