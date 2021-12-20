/* console.log(Number.isNaN(3));

let valor = 48.49;
valor = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
console.log(valor);
console.log(Math.abs(3 - 6));

const aleatorio = Math.random();

console.log(aleatorio);
 */

//--------DESAFIOS---------//
// Retorne um número aleatório
// entre 1050 e 2000

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1500);
console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const numerosArray = numeros.split(", ");
const numeroMax = Math.max(...numerosArray);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230 ", "r$ 200"];

function limparPreco(preco) {
  preco.console.log(preco);
}
limparPreco(listaPrecos[0]);
