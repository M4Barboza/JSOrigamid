function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return "Abraçou";
  };
  this.andar = function () {
    return "Andou pelo objeto";
  };
}

Pessoa.prototype.andar = function () {
  //sempre pesquisa primeiro no constructio, caso não ache procura no prototype
  return this.nome + " andou";
};
Pessoa.prototype.nadar = function () {
  return this.nome + " nadou";
};

const matheusAula = new Pessoa("Matheus", 22);

/* console.log(Pessoa.prototype);
console.log(matheus.prototype); */

const pais = "Brasil";
const cidade = new String("Rio");

const listaAnimais = ["cachorro", "gato", "cavalo"];

const lista = document.querySelectorAll("li");

//Transforma em um arrat
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};
