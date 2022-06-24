
async function adicionar(jogos, game) { 
    let r = await fetch('jogos/cadastrar') 
    return r.json()
}
function alterar(jogos, game, id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            jogos[id] = game
            resolve({ok: true})
        }, 1000);
    })
}
function deletar(jogos, id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            jogos.splice(id, 1)
            resolve({ok: true})
        }, 1000);
    })
}
async function listar(jogos) {
    let r = await fetch('jogos/listar') 
    return r.json()
}