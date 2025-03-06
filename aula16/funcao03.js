let v = function(x) {
    return x*2
}
console.log(v(15))

//---------------------------

// Função tradicional
function dobrar(x) {
    return x * 2;
}

// Arrow Function equivalente
const dobrar = (x) => x * 2;

const quadrado = x => x * x;
console.log(quadrado(4)); // Saída: 16

const somar = (a, b) => a + b;
console.log(somar(3, 7)); // Saída: 10

const saudacao = (nome) => {
    return `Olá, ${nome}!`;
};
console.log(saudacao("Dennys")); // Saída: Olá, Dennys!

const triplo = x => x * 3;
console.log(triplo(3)); // Saída: 9

/*

O this no Arrow Function

O Arrow Function não cria seu próprio this, ele herda o this do escopo onde foi definido.
Já a função tradicional cria seu próprio this.

*/

const pessoa = {
    nome: "Dennys",
    saudacaoTradicional: function () {
        console.log("Olá, " + this.nome);
    },
    saudacaoArrow: () => {
        console.log("Olá, " + this.nome);
    }
};

pessoa.saudacaoTradicional(); // Saída: Olá, Dennys
pessoa.saudacaoArrow(); // Saída: Olá, undefined

/*

saudacaoTradicional() usa function, então this.nome refere-se ao objeto pessoa.
saudacaoArrow() usa =>, então o this não é do objeto pessoa, mas sim do escopo onde foi definida (que pode ser undefined ou window).



Conclusão
O Arrow Function (=>) é uma maneira mais curta e moderna de criar funções.
Ele não cria seu próprio this, herdando o escopo pai.
Funciona muito bem para funções curtas, callbacks e métodos de array (map, filter, reduce).

*/

// 🚀 Exemplo prático com map():

const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(n => n * 2);
console.log(dobrados); // Saída: [2, 4, 6, 8]