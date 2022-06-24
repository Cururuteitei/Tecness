function mostrar_cadastro() {
    let nome = document.querySelector('#nome').value;
    let autor = document.querySelector('#autor').value;
    let ano = document.querySelector('#ano').value;
    let game = {
        nome: nome,
        autor: autor,
        ano: ano 
    };
    return game
}


function mostrar_lista(jogos) {
    let mensagem = '';
    let id = 0;
    let tbody = document.querySelector('#tbody');
    for (let game of jogos) {
        let idade = calcularIdade(game.ano)
        let linha = document.createElement('tr')
        let coluna = document.createElement('td')
        let coluna2 = document.createElement('td')
        let coluna3 = document.createElement('td')
        let coluna4 = document.createElement('td')
        let coluna5 = document.createElement('td')
        coluna.innerText = id
        coluna2.innerText = game.nome
        coluna3.innerText = game.autor
        coluna4.innerText = game.ano
        linha.appendChild(coluna)
        linha.appendChild(coluna2)
        linha.appendChild(coluna3)
        linha.appendChild(coluna4)
        tbody.appendChild(linha)
        id++ ;
    }
}