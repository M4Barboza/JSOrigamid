/* const carros = ["Ford", "Fiat", "Honda"];

carros.forEach((item, index, array) => {
  console.log(item.toUpperCase(), index, array);
});

console.log(carros);
 */

/* const li = document.querySelectorAll("li");

const retornoForeach = li.forEach((item, index) => {
  item.classList.add("ativa" + index);
});

console.log(retornoForeach); */

/* const carros = ["Ford", "Fiat", "Honda"];

const novaArray = carros.map((item, index, array) => {
  console.log(item.toUpperCase(), index, array);
  return item.toUpperCase();
});

console.log(novaArray);
console.log(carros);

const numeros = [1, 2, 3, 4, 5, 6, 78];
const numerosX2 = numeros.map((n) => n * 2);
console.log(numerosX2); */
/* 
const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);

const nomeAulas = (aula) => aula.nome;

const arrayNomeAulas = aulas.map(nomeAulas);
console.log(arrayNomeAulas);
console.log(tempoAulas); */

/* const aulas = [10, 25, 30]; */
/* const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
  console.log(acumulador, item, index, array);
}, 0); */

/* const numeros = [10, 25, 30, 3, 54, 33, 22];
const maiorNum = numeros.reduce(
  (anterior, atual) => (anterior > atual ? anterior : atual),
  0
);

console.log(maiorNum); */
/* const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
]; */

//var acumulador = {};
/* const listaAulas = aulas.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  console.log(acumulador);
  return acumulador;
}, {});
 */

/* const frutas = ["Banana", undefined, "Pêra", "Uva"];

const temUva = frutas.some((item) => {
  return item === "Uva";
});
const every = frutas.every((fruta) => {
  return fruta;
});
console.log(every);

const indexUva = frutas.find((item) => {
  return item === "Uva";
});
console.log("Index: ", indexUva); */

/* const frutas = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];

const arrayFrutas = frutas.filter((item) => {
  console.log(item);
  return item;
});
console.log(arrayFrutas);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];
const aulasMaiores = aulas.filter((aula) => {
  return aula.min > 15;
}); */
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]
