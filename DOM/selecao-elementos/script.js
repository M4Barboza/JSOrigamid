const img = document.querySelectorAll('img');
console.log(img);//retrona todas as imagens do site

const imagemsAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagemsAnimais); //retorna todas as imagens que começam com "imagem"

const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos); //retorna os links internos origamid.com não é um link interno

const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais);//retorna o primeiro h2 dentro de .animais-descricao

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length]); //retorna o último p