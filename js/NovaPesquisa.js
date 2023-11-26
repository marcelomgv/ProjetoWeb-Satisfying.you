const AdicionarPesquisa = () => { 
    const nome = document.getElementById("nomepesq").value
    const data = document.getElementById("data").value
    const imagem = document.getElementById ("imagem-desc").value

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

const preview = () => {
    const imgname = document.getElementById("imagem-desc")
    const imgprev = document.getElementById("image")

    imgprev.src = imgname
}

const previewcar = () => {
    const imgname = document.getElementById("imagem-desc");
    const imgprev = document.getElementById("image");
    const imgcar = document.getElementById("imagem-car");

    if (imgcar.files && imgcar.files[0]) {
        var reader = new FileReader();

        reader.onload = (e) => {
            imgprev.src = e.target.result;
        };

        reader.readAsDataURL(imgcar.files[0]);
    }

    imgname.value = imgcar.files[0].name;
}