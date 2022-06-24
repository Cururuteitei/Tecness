let jogosTerror = [];
let jogosFiccao = [];

function adicionar(jogos, game) {
        jogos.push(game);
}
function alterar(jogos, game, id) {
            jogos[id] = game
}
function deletar(jogos, id) {
            jogos.splice(id, 1)
}
function listar(jogos) {

            return jogos

}
function controlar_lista(jogos) {
    lista =  listar(jogos);
    mostrar_lista(jogos)
}
function mostrar_cadastro() {
    alert('cadastrar') 
    let nome = prompt('nome do jogo');
    let autor = prompt('nome do autor do jogo');
    let ano = parseInt(prompt('ano de publicacao do jogo '));
    let game = {
        nome: nome,
        autor: autor,
        ano: ano 
    };
    return game
}
function mostrar_edicao() {
    let id = parseInt(prompt('Qual id quer editar?'))
    let game = game[id]
    let nome = prompt(`nome do jogo? [${game.nome}]`); 
    if (nome == '') {
        nome = game.nome        
    } 
    let autor = prompt(`nome do autor do jogo? [${game.autor}]`);
    if (autor == '') {
        autor = game.autor        
    } 
    let ano = prompt(`ano  do jogo? [${game.ano}]`);
    if (ano == '') {
        ano = game.ano        
    }
    let gameNovo = {
        nome: nome,
        autor: autor,
        ano: ano
    };
    return [gameNovo, id]

}
function mostrar_delete() {
    let id = parseInt(prompt('Qual id quer apagar?'))
    return id 
}

function cadastrar(jogos) {
    let game = mostrar_cadastro()
    adicionar(jogos, game)
}
//model
function calcularIdade(ano) {
    let idade = new Date().getFullYear() - ano;
    return idade;
}
function mostrar_lista(jogos) {
    //view
    alert('listar')
    let mensagem = '';
    let id = 0;
    for (let game of jogos) {
        let idade = calcularIdade(game.ano)
        mensagem += id + ':' + game['nome'] + '-' + game.autor + ':' + game.ano + 'publicado há ' + idade + 'anos' + '\n'  ;
        id++ ;
    }
    alert(mensagem);
}   
function editar(jogos) {
    controlar_lista(jogos)
    //control and view
    let [gameNovo, id] = mostrar_edicao()


    //model

    alterar(jogos, gameNovo, id)

    

}  
function apagar(jogos) {
    controlar_lista(jogos)
    //control and view
    let id = mostrar_delete() 
    //model
    deletar(jogos, id)

}
function mostrar_resultado(resultado){
    alert(resultado)
}
function menu() {
    loop:
        while (true) {
            //view
            alert('1:cadastrarFiccao\n2:lista\n3:editar\n4:apagar\n5:cadastrar terror\n6:listar terror\n7:sair');
            //control and view
            opcao = prompt('');
            //control
            switch (opcao) {
                case '1': 
                    cadastrar(jogosFiccao)
                    break
                case '2': 
                    controlar_lista(jogosFiccao)
                    break
                case '3':
                    editar(jogosFiccao)
                    break
                case '4':
                    apagar(jogosFiccao)
                    break
                case '5':
                    cadastrar(jogosTerror)
                    break
                case '6':
                    controlar_lista(jogosTerror)
                    break                
                case '7': 
                    alert('sair')
                    break loop;
            }
        }
}