/* const url = 'https://jsonplaceholder.typicode.com/posts';
const options = {
    method: 'POST',
    body: '{"title": "JavaScript"}',
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
}

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json));

 */
const url = 'https://www.google.com';

fetch(url,)
    .then(response => response.text())
    .then(text => console.log(text))

