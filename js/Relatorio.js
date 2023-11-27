window.onload = () => {
    var urlParams = new URLSearchParams(window.location.search)
    const nome = decodeURIComponent(urlParams.get('conteudo'))

    const listaPesquisas = JSON.parse(window.localStorage.getItem('listaPesquisas'))

    let pesq;
    for(let pesquisa of listaPesquisas){
        if(pesquisa.nome == nome){
            pesq = pesquisa
            break
        }
    }

    var grf = document.getElementById("grafico").getContext("2d");

    var data = {
        datasets: [{
            data: [pesq.pessimo, pesq.ruim, pesq.neutro, pesq.bom, pesq.excelente],
            backgroundColor: ["#53D8D8", "#EA7288", "#5FCDA4", "#6994FE", "#F1CE7E"]
        }]
    };

    var options = {
        responsive: true,
        maintainAspectRatio: false
    };

    var myPieChart = new Chart(grf, {
        type: 'pie',
        data: data,
        options: options
    });
}