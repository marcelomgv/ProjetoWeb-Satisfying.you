const ModificarPesquisa = () => {
    var urlParams = new URLSearchParams(window.location.search)
    const nome = decodeURIComponent(urlParams.get('conteudo'))

    const listaPesquisas = JSON.parse(window.localStorage.getItem('listaPesquisas'))

    for(let pesquisa of listaPesquisas){
        if(pesquisa.nome == nome){
            pesquisa.nome = document.getElementById("nomepesq").value
            pesquisa.data = document.getElementById("data").value
            pesquisa.imagem = document.getElementById("imagem").value
            break
        }
    }

    window.localStorage.setItem("listaPesquisas", JSON.stringify(listaPesquisas))
}