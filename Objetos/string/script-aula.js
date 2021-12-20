/* const comida = "Pizza";
const frase = "A melhor comida";

comida.length;
frase.length;

console.log(frase.length);
console.log(frase.charAt(frase.length)); */

/* const frase = "A melhor linguagem é ";
const linguagem = "Javascript";

const fraseFinal = frase.concat(linguagem, "!!!", "oi "); */

/* const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

console.log(listaFrutas.includes(fruta, 4));

console.log(fruta.startsWith("Ba"));
console.log(fruta.endsWith("na")); */

/* const transacao1 = "Depóstio de cliente";
const transacao2 = "Depóstio de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao3.slice(-5)); */

/* const linguagem = "JavaScript";
console.log(linguagem.substring(2));

const preco = "R$ 99,00";
const listaPrecos = ["R$ 99", "R$ 199", "R$ 299"];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10), "-");
});

const frase = "Ta";
console.log(frase.repeat(5)); // TaTaTaTaTa */

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");

let preco = "R$ 1200, 43";
preco = preco.replace(",", ".");

const arrayLista = listaItens.split("");
//console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section");
console.log(htmlArray);

const frutasArray = ["Banana", "Melancia", "Laranja"];
