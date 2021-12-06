/* const menu = document.querySelector('.menu');
menu.classList.add('ativo');

if (menu.classList.contains('ativo')) {
    menu.classList.add('esta-ativo');
    menu.classList.remove('ativo');
}

const animais = document.querySelector('.animais');

console.log(animais);

console.log(animais.attributes); */

const menu = document.querySelectorAll('.menu a');

/* menu.forEach((item) => item.classList.add('ativo')); */



menu.forEach((item) => item.classList.remove('ativo'));

menu[0].classList.add('ativo');

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const possui = img.hasAttribute('alt');
    console.log(possui);
});

const linkExterno = document.querySelector('a[href^="http"]');

linkExterno.setAttribute('href', 'https://www.google.com/')