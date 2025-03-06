// Seleciona o input onde o usuário digita os números
let num = document.querySelector('input#fnum');

// Seleciona o elemento <select> onde os números adicionados serão listados
let lista = document.querySelector('select#flist');

// Seleciona a <div> onde será exibido o resultado final
let res = document.querySelector('div#res');

// Cria um array vazio para armazenar os números adicionados
let valores = [];

// Função que verifica se um número está entre 1 e 100
function isNumero(n) {
    // Converte o valor para número e verifica se está dentro do intervalo permitido
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true; // Retorna verdadeiro se estiver no intervalo
    } else {
        return false; // Retorna falso caso contrário
    }
}

// Função que verifica se um número já está na lista
function inLista(n, l) {
    // Converte o número para tipo Number e verifica se está no array 'l' (lista de valores)
    if (l.indexOf(Number(n)) != -1) {
        return true; // Retorna verdadeiro se o número já estiver na lista
    } else {
        return false; // Retorna falso se o número não estiver na lista
    }
}

// Função para adicionar um número à lista
function adicionar() {
    // Verifica se o número digitado é válido e se não está na lista
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // Aqui deveria vir o código para adicionar o número na lista
    } else {
        // Exibe um alerta caso o número seja inválido ou já esteja na lista
        window.alert('Valor inválido ou já encontrado na lista.');
    }
}
