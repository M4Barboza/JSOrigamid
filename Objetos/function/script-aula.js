/* const perimetro = new Function("lado", "return lado * 4");

function darOi(nome, idade) {
  console.log("Oi para você " + nome + idade);
}

darOi.call({}, "Matheus", 22);

window.marca = "Carro";
window.ano = 288;

function descricaoCarro(velocidade) {
  console.log(this);
  console.log(this.marca + " " + this.ano + velocidade);
}

descricaoCarro.call({ marca: "Honda", ano: 2015 }, 100);

const carros = ["Ford", "Fiat", "VW"];
carros.forEach.call(carros, (item) => {
  console.log(item);
});

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  // this.element.classList.add(classe);
};

//const ul = new Dom("ul");

const li = {
  element: document.querySelector("li"),
};

Dom.prototype.ativo.call(li, "ativar"); */

//ul.ativo.call(li, "ativar");

//console.log(ul.element);

/* const frutas = ["Uva", "Maçã", "Banana"];

Array.prototype.mostrarThis = function () {
  console.log(this);
};

Array.prototype.pop.call(frutas); // == frutas.pop()

const arrayLike = {
  0: "item 1",
  1: "item 2",
  2: "item 3",
  length: 3,
};

const li = document.querySelectorAll("li");
const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains("ativo");
});
console.log(filtro);
console.log(li); */

//----------Functions 2-------------//
const numeros = [33, 232, 33, 434, 54, 5424, 4];

const $ = document.querySelectorAll.bind(document, "li");

const carro = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};
carro.acelerar(100, 20);
// Ford acelerou 100 em 20

const honda = {
  marca: "Honda",
};
const acelerarHonda = carro.acelerar.bind(honda, 100);

console.log(acelerarHonda(20));

console.log(carro);
