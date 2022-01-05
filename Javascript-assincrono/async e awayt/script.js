/* async function puxarDados() {
    const responseDados = await fetch('./dados.json');
    const jsonDados = await responseDados.json();

    document.body.innerText = jsonDados.aula;
}

puxarDados(); */

async function puxarDados() {
    try {
        const responseDados = await fetch('./dados.json');
        const jsonDados = await responseDados.json();

        document.body.innerText = jsonDados.aula;
    } catch (erro) {
        console.log(erro);
    }
}

puxarDados();