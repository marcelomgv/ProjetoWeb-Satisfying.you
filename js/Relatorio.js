window.onload = () => {
    var urlParams = new URLSearchParams(window.location.search)
    const nome = decodeURIComponent(urlParams.get('conteudo'))

    const listaPesquisas = JSON.parse(window.localStorage.getItem('listaPesquisas'))

    for(let pesquisa of listaPesquisas){
        if(pesquisa.nome == nome){
            
        }
    }
}