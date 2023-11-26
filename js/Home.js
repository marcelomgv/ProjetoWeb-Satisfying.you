window.onload = () => {
    const listaPesquisas = JSON.parse(window.localStorage.getItem('listaPesquisas'))

    for(let pesquisa of listaPesquisas){
        addPesquisa(pesquisa)
    }
}

const addPesquisa = (pesquisa) => {
    const imagem = document.createElement("img")
    imagem.src = pesquisa.imagem
    const nome = document.createElement("h6")
    nome.innerHTML = pesquisa.nome
    const data = document.createElement("p")
    data.innerHTML = pesquisa.data

    const art = document.createElement("article")
    art.appendChild(imagem)
    art.appendChild(nome)
    art.appendChild(data)
    art.onclick = () => send(pesquisa);

    const main = document.getElementById("main")
    main.appendChild(art)
}

const send = (pesquisa) => {
    window.location.href = 'AcoesPesquisa.html?conteudo=' + encodeURIComponent(pesquisa.nome);
}