window.onload = () => {
    var urlParams = new URLSearchParams(window.location.search)
    const nome = decodeURIComponent(urlParams.get('conteudo'))
    const tit = document.getElementById("nome-pesq")
    tit.innerHTML = nome
}

const Coleta = (cod) => {
    var urlParams = new URLSearchParams(window.location.search)
    const nome = decodeURIComponent(urlParams.get('conteudo'))

    const listaPesquisas = JSON.parse(window.localStorage.getItem('listaPesquisas'))

    for(let pesquisa of listaPesquisas){
        if(pesquisa.nome == nome){
            if(cod == 1){
                pesquisa.pessimo++
            }
            if(cod == 2){
                pesquisa.ruim++
            }
            if(cod == 3){
                pesquisa.neutro++
            }
            if(cod == 4){
                pesquisa.bom++
            }
            if(cod == 5){
                pesquisa.excelente++
            }
            break
        }
    }
    
    window.localStorage.setItem("listaPesquisas", JSON.stringify(listaPesquisas))
}