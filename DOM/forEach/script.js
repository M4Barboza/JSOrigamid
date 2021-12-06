const imgs = document.querySelectorAll('img');

imgs.forEach(function (item, index, array) {
    // console.log(item, index, array)
});

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

//paragrafos.forEach((item) => console.log(item));
paragrafos.forEach((item) => console.log(item.innerText));
