/*
0 Obter um usuario
1 Obter o numero de telefone de um usuario a partir de seu id
2 Obter o endereco do usuario pelo id
*/

function obterUsuario (callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone (idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '99002233',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco (idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua Coronel Pedro Scherer',
            numero: 34
        })
    }, 2000)
}

// function resolverUsuario (erro, usuario) {
//     console.log(usuario)
// }

obterUsuario(function resolverUsuario (error, usuario) {
    if (error) {
        console.log('DEU RUIM em USUARIO', error)
        return
    }
    obterTelefone(usuario.id, function resolverTelefone (error1, telefone) {
        if (error1) {
            console.log('DEU RUIM em TELEFONE', error1)
            return
        }
        obterEndereco(usuario.id, function resolverEndereco (error2, endereco) {
            if (error2) {
                console.log('DEU RUIM em ENDERECO', error2)
                return
            }
        
            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua}, ${endereco.numero},
                Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
})
// const telefone = obterTelefone(usuario.id)
// const endereco = obterEdereco(usuario.id)
