let tipoimg = false

const ModificarPesquisa = () => {
    var urlParams = new URLSearchParams(window.location.search)
    const nome = decodeURIComponent(urlParams.get("conteudo"))

    const listaPesquisas = JSON.parse(window.localStorage.getItem("listaPesquisas"))

    for(let pesquisa of listaPesquisas){
        if(pesquisa.nome == nome){
            pesquisa.nome = document.getElementById("nomepesq").value
            pesquisa.data = document.getElementById("data").value
            if(tipoimg){
                pesquisa.imagem = document.getElementById("image").value
            }
            else{
                pesquisa.imagem = document.getElementById("imagem-desc").value
            }
            break
        }
    }

    window.localStorage.setItem("listaPesquisas", JSON.stringify(listaPesquisas))
}

const ApagarPesquisa = () => {
    var urlParams = new URLSearchParams(window.location.search)
    const nome = decodeURIComponent(urlParams.get("conteudo"))

    const listaPesquisas = JSON.parse(window.localStorage.getItem("listaPesquisas"))

    for(let i=0; i<listaPesquisas.length; i++){
        if(listaPesquisas[i].nome == nome){
            listaPesquisas.splice(i,1)
            break
        }
    }

    window.localStorage.setItem("listaPesquisas", JSON.stringify(listaPesquisas))
}

const preview = () => {
    const imgname = document.getElementById("imagem-desc").value
    const imgprev = document.getElementById("image")

    imgprev.src = imgname
    tipoimg = false
}

const previewcar = () => {
    const imgname = document.getElementById("imagem-desc")
    const imgprev = document.getElementById("image")
    const imgcar = document.getElementById("imagem-car")

    if (imgcar.files && imgcar.files[0]) {
        const reader = new FileReader()

        reader.onload = (e) => {
            imgprev.src = e.target.result
            imgprev.value = e.target.result
        };

        reader.readAsDataURL(imgcar.files[0])
    }

    imgname.value = imgcar.files[0].name
    tipoimg = true
}