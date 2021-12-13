const imgs = document.querySelectorAll('img');

function handleImg(event) {
    console.log(event.target.getAttribute('src'));
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
})

/* Desafios */

const linksInternos = document.querySelectorAll('a[href^="#');

function handleLink(event) {
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo');

}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
})


const todosElementos = document.querySelectorAll(' body *');

function handleElemento(event) {
    //console.log(event.currentTarget);
    //event.currentTarget.remove();
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento);
})

console.log(todosElementos);

function handleClickT(event) {
    if (event.key === 't') {
        document.documentElement.classList.toggle('.textomaior')
    }
}

window.addEventListener('keydown', handleClickT);