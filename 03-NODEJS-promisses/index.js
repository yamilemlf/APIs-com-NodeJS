/*
0 Obter um usuario
1 Obter o numero de telefone de um usuario a partir de seu id
2 Obter o endereco do usuario pelo id
*/

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

const usuarioPromise = obterUsuario()
//para manipular sucesso: .then
//para manipular erros, .catch
usuarioPromise
    .then(function (resultado) {
        return obterTelefone(resultado.id)
    })
    .then(function(resultado){
        console.log('RESULTADO ', resultado)
    })
    .catch(function(error){
        console.log('DEU RUIM ', error)
    })

