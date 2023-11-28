window.onload = () => {

    const user = JSON.parse(window.localStorage.getItem("userlog"))
    const listaPesquisas = JSON.parse(window.localStorage.getItem('listaPesquisas')) || []

    if(listaPesquisas.length > 0){
        for(let pesquisa of listaPesquisas){
            if(pesquisa.user == user){
                addPesquisa(pesquisa)
            }
        }
    }

    document.getElementById("pesquisa").addEventListener("input", function () {
        const termoBusca = this.value.toLowerCase();
        const itens = document.getElementsByClassName("elem");
    
        for (const item of itens) {
            const nomeItem = item.querySelector("h6").innerHTML.toLowerCase();
            if (nomeItem.includes(termoBusca)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        }
    });
}

const addPesquisa = (pesquisa) => {
    const imagem = document.createElement("img")
    imagem.src = pesquisa.imagem
    const nome = document.createElement("h6")
    nome.innerHTML = pesquisa.nome
    const data = document.createElement("p")

    const datadma = new Date(pesquisa.data)
    const dia = datadma.getDate().toString().padStart(2, '0');
    const mes = (datadma.getMonth() + 1).toString().padStart(2, '0');
    const ano = datadma.getFullYear();
    data.innerHTML = `${dia}/${mes}/${ano}`;

    const art = document.createElement("article")
    art.className = "elem";
    art.appendChild(imagem)
    art.appendChild(nome)
    art.appendChild(data)
    art.onclick = () => send(pesquisa)

    const main = document.getElementById("main")
    main.appendChild(art)
}

const send = (pesquisa) => {
    window.location.href = 'AcoesPesquisa.html?conteudo=' + encodeURIComponent(pesquisa.nome)
}