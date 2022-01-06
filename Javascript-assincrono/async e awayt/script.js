/* async function puxarDados() {
    const responseDados = await fetch('./dados.json');
    const jsonDados = await responseDados.json();

    document.body.innerText = jsonDados.aula;
}

puxarDados(); */

async function puxarDados() {

    const responseDados = fetch('./dados.json');
    const responseClientes = fetch('./clients.json');


    const jsonDados = await (await responseDados).json();
    const jsonClientes = await (await responseClientes).json();

    console.log(jsonDados)
    console.log(jsonClientes)

}

puxarDados();