const perimetro = new Function("lado", "return lado * 4");

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

Dom.prototype.ativo.call(li, "ativar");

//ul.ativo.call(li, "ativar");

//console.log(ul.element);
