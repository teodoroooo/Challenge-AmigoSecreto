//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let maxAmigos = 5;
let amigos = [];


const regexProibida = /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?`~]/; // Caracteres especiais


function mensagemVerificacao(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemPadrao(){
    mensagemVerificacao('h2', 'Digite o nome de seus amigos.');
}

function adicionarAmigo(){
    let nome = document.getElementById("amigo").value.trim();
    
    if (amigos.includes(nome)){
        mensagemVerificacao('h2', 'Ops... esse nome já foi adicionado a lista')
        return;
    }


    if (regexProibida.test(nome)){
        mensagemVerificacao('h2', 'O nome não pode conter caracteres especiais.');
        limparCampo();
        return;
    }
    if (amigos.length == maxAmigos) {
        mensagemVerificacao('h2', 'Você só pode adicionar 5 amigos por vez na sua lista :)');
        limparCampo();
        document.querySelector('input').disabled = true;
        return;
    }
    if (nome == '') {
        mensagemVerificacao('h2', 'Por favor, Insira um nome.');
        return;
    } else if (nome.length < 4 || nome.length > 10 ){
        mensagemVerificacao('h2', 'O nome deve conter de 4 a 10 caracteres.');
        return;
    } else {
        amigos.push(nome);
        console.log(amigos);
    }
    
    atualizarListaAmigo();
    criarListaNomes();
    limparCampo();
    mensagemPadrao();
}

// Função para limpar o campo do input 'NOME'
function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}

// Exclui a lista antetior
function atualizarListaAmigo(){
    let listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = "";
}

function criarListaNomes (){
    for (let i = 0; i < amigos.length; i++){
        
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
        
    }
}

function sortearAmigo(){
    let resultadoSorteio = document.getElementById('resultado');
    if (amigos.length == 0){
        resultadoSorteio.textContent = "A lista de amigos está vazia. Adicione amigos antes de sortear.";
        return;
    }

    if (amigos.length < 3){
        mensagemVerificacao('h2', 'Voce precisa adicionar pelo menos 3 amigos para fazer o sorteio');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    resultadoSorteio.textContent = `Amigo sorteado: ${amigoSorteado}`;

    atualizarListaAmigo();
    mensagemPadrao();
    mensagemVerificacao('h2', `Parabéns ${amigoSorteado}, você foi o sorteado!`)
}

function reiniciarSorteio(){
    mensagemVerificacao('h2', 'Digite o nome dos seus amigos');
    amigos = [];
    limparCampo();
    atualizarListaAmigo();
    document.querySelector('input').disabled = false;
    document.getElementById('resultado').textContent = '';
}