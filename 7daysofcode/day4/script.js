/*Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.*/


resposta = document.getElementById('resposta');

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

numero = numeroAleatorio(1, 10);

tentativas = 1
while(tentativas <= 3) {
    chute = Number(prompt('Digite um número entre 1 e 100 para descobrir o número pensado'))
    if(chute == numero) {
        resposta.innerHTML = `Parabéns, você acertou! O número pensado era: ${numero}`;
    }else if(tentativas === 3) {
        resposta.innerHTML = `Você errou todas as tentativas! O número pensado era: ${numero}`
    }else{
        alert(`Poxa, você errou! Tente novamente.`)
    }
    tentativas++
};