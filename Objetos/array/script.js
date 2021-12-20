/* const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];
const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];
dados[2]("Ford");
dados[1][2].cor; // azul

const carros = new Array("Ford", "Fiat", "Honda");
carros[2] = "Ferrari";
carros[3] = "Kia";
carros[20] = "Parati";
console.log(carros);

const li = document.querySelectorAll("li");
const arrayLi = Array.from(li);

const obj = {
  0: "Andre",
  1: "Rafael",
  2: "Teste",
  length: 3,
};
const objArray = Array.from(obj);

console.log(li);
console.log(arrayLi);

const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];
console.log(frutas);

instrumentos.sort();

console.log(instrumentos);

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
console.log(idades);
 */

/* const carros = ["Ford", "Fiat", "VW"];
carros.unshift("Kia", "Ferrari");
carros.push("Parati", "Gol");
console.log(carros.splice(2, 1, "Fusca"));
console.log(carros); */

//----------DESAFIOS--------------//
const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop();

comidas.push("Arroz");
comidas.unshift("Peixe", "Batata");

console.log(primeiroValor);
console.log(ultimoValor);
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort();
estudantes.reverse();
console.log(estudantes);
console.log(estudantes.includes("Joana"));
console.log(estudantes.includes("Juliana"));

let html = `<section>
 <div>Sobre</div>
 <div>Produtos</div>
 <div>Contato</div>
 </section>`;
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split("section");
html = html.join("ul");
html = html.split("div");
html = html.join("li");

console.log(html);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosCopia = carros.slice();
carros.pop();

console.log(carrosCopia);
console.log(carros);
