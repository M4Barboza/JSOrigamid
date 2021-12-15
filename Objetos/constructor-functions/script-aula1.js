function Carro() {
  this.marca = "Marca";
  this.preco = 0;
}

const honda = new Carro();
honda.marca = "Honda";
honda.preco = 4000;

const fiat = new Carro();
fiat.marca = "Fiat";
fiat.preco = 3000;


function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000);