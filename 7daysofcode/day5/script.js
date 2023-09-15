/*Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho*/

resposta = document.getElementById('resposta')
frutas = []
laticinios = []
congelados = []
doces = []

function adiciona(lista, item) {
    lista.push(item);
}

while (true) {
    adicionarItem = prompt('Deseja adicionar um item na sua lista de compras? (Sim/Não/Remover)').toUpperCase();

    if(adicionarItem == 'SIM') {
        item = prompt('Qual item você deseja inserir?');
        categoria = prompt(`Qual categoria o item escolhido se encaixa? \n1- Frutas \n2- Laticínios \n3- Congelados \n4- Doces`);
        if(categoria == 1) {
            adiciona(frutas, item)
        } else if(categoria == 2) {
            adiciona(laticinios, item)
        } else if(categoria == 3) {
            adiciona(congelados, item)
        } else {
            adiciona(doces, item)
        } 
    } else if(adicionarItem == 'REMOVER') {
        if(frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0) {
            alert('A lista está vazia! Não há itens a serem removidos.');
        } else {
            remover = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`);
            if(frutas.indexOf(remover) != -1) {
                frutas.splice(frutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido!`)
            } else if(laticinios.indexOf(remover) != -1) {
                laticinios.splice(laticinios.indexOf(remover), 1);
                alert(`O item ${remover} foi removido!`)
            } else if(doces.indexOf(remover) != -1) {
                doces.splice(doces.indexOf(remover), 1);
                alert(`O item ${remover} foi removido!`)
            } else if(congelados.indexOf(remover) != -1) {
                congelados.splice(congelados.indexOf(remover), 1);
                alert(`O item ${remover} foi removido!`)
            } else {
                alert('Não foi possível encontrar o item dentro da lista.')
            }
        }
    } else if(adicionarItem == 'NÃO') {
        resposta.innerHTML = `Frutas: ${frutas} <br> Laticínios: ${laticinios} <br> Congelados: ${congelados} <br> Doces: ${doces}`;
        break;
    } else {
        alert('Você adicionou uma opção inválida! Por favor, tente novamente.')
    }
}

