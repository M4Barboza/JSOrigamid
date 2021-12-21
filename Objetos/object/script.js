/* const pessoa = new Object({
  nome: "Matheus",
});
console.log(pessoa);

const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return valor;
  },
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

const honda = Object.create(carro);
honda.init("Honda");

const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

Object.assign(moto, funcaoAutomovel);
console.log(moto); */

const moto = {
  capacete: true,
};
Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4 + " Total de rodas";
    },
  },
});

console.log(moto);

//---------------OBJECT 2-----------------//
