/*
0 Obter um usuario
1 Obter o numero de telefone de um usuario a partir de seu id
2 Obter o endereco do usuario pelo id
*/

const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario () {
    //quando der algum problema -> reject(ERRO)
    //quando sucesso => RESOLVE
    return new Promise (function resolvePromise (resolve, reject) {
        setTimeout(function () {
            // return reject(new Error ('DEU RUIM DE VERDADE!'))
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
    
}

function obterTelefone (idUsuario) {
    return new Promise (function resolverPromise (resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '99002233',
                ddd: 11
            })
        }, 2000)    
    })
}

function obterEndereco (idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua Coronel Pedro Scherer',
            numero: 34
        })
    }, 2000)
}

//1º passo: add palavra async na função e automaticaente ela retornará uma promise

main()

async function main () {
    try {
        console.time('medida-promise')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
            Nome: ${usuario.nome}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            Endereço: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('medida-promise')

    }
    catch (error) {
        console.error('DEU RUIM ', error)
    }
}

