const RecNome = () => {
    var urlParams = new URLSearchParams(window.location.search)
    const nome = decodeURIComponent(urlParams.get('conteudo'))
    return nome
}

const SendModPesq = () => {
    nome = RecNome()
    window.location.href = 'ModificarPesquisa.html?conteudo=' + encodeURIComponent(nome);
}

const SendColeta = () => {
    nome = RecNome()
    window.location.href = 'Coleta.html?conteudo=' + encodeURIComponent(nome);
}

const SendRelatorio = () => {
    nome = RecNome()
    window.location.href = 'Relatorio.html?conteudo=' + encodeURIComponent(nome);
}