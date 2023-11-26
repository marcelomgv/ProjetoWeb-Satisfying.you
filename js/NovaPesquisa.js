const listaPesquisas = []

const AdicionarPesquisa = () => { 
    const nome = document.getElementById("nomepesq").value
    const data = document.getElementById("data").value
    const imagem = document.getElementById ("imagem").value

    const listaPesquisas = JSON.parse(window.localStorage.getItem("listaPesquisas")) || [];

    listaPesquisas.push({
        nome: nome,
        data: data,
        imagem: imagem,
        pessimo: 0,
        ruim: 0,
        neutro: 0,
        bom: 0,
        excelente: 0
    })

    window.localStorage.setItem("listaPesquisas", JSON.stringify(listaPesquisas))
}