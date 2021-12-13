const imagem = document.querySelector('img');
//console.log(imagem);

function callback(event) {
    console.log(event);
}

//imagem.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
    console.log(event.currentTarget);
    console.log(event.target); //local onde foi feito o click do mouse
    console.log(event.type) //tipo do evento (no caso é um click)
}

animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http');

function handleLinkExterno(event) {
    event.preventDefault();
    console.log("Clicou");
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event) {
    console.log(event.type, event);
}

h1.addEventListener('click', handleEvent);
//h1.addEventListener('mouseenter', handleEvent);
//h1.addEventListener('mousemove', handleEvent);

//window.addEventListener('scroll', handleEvent);
//window.addEventListener('resize', handleEvent);

function handleKeyboard(event) {
    if (event.key === 'a') {
        document.body.classList.toggle('azul');
    }
    console.log(event.key);
}
window.addEventListener('keydown', handleKeyboard);