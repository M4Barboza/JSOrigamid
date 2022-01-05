/* const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
        setTimeout(() => {
            resolve({ nome: 'Matheus', idade: 22 });
        }, 1000)
    }
    else {
        reject(Error('Um erro ocorreu'))
    }


});
const retorno = promessa.then(resolucao => {
    console.log(resolucao)

    resolucao.profissao = 'Designer';
    return resolucao;
})
    .then(resolucao => {
        console.log(resolucao)
    }, rejeitada => {
        console.log(rejeitada)
    }).finally(() => {
        console.log('Acabou')
    })

console.log(retorno); */
const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário Logado')
    }, 1500)
})


const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados Carregados')
    }, 1500)
})

const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolucao) => {
    console.log(resolucao);
})