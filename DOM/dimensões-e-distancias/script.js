const listaAnimais = document.querySelector('.animais-lista');

const animaisTopo = listaAnimais.offsetTop;//retorna valor da distancia do topo
console.log(animaisTopo);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft; //retorna valor da distancia a esquerda

console.log(h2left);

const rect = primeiroh2.getBoundingClientRect();//retorna valores de "coordenadas" do elemento
console.log(rect);

if (rect.top < 0) {
    console.log("Passou do elemento");
}

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset,
);

const small = window.matchMedia('(max-width: 600px)');

if (small.matches) {
    console.log("Mobile User");
} else {
    console.log("Desktop User");
}


console.log(small);


/*Desafios Aula*/

const distanciaImagem = document.querySelector('img');
const imgTop = distanciaImagem.offsetTop;
console.log(imgTop);

function somaImagens() {
    const todasImgs = document.querySelectorAll('img');
    console.log(todasImgs);
    let soma = 0;
    todasImgs.forEach((imagem) => {
        soma = soma + imagem.offsetWidth;
    })
    console.log(soma);
}
window.onload = function () {
    somaImagens();
}



const link = document.querySelectorAll('a');

link.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, "Possui boa acessibilidade");
    } else {
        console.log(link, "Não possui boa acessibilidade");
    }
})

console.log(link);

const browserSmall = window.matchMedia('(max-width: 720)'.matches);

if (browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}