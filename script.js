function giovanalinda() {
    fetch('dados.json')
        .then(response => response.json())
        .then(dadinhos =>{
            tablet = document.getElementById('giovana');

            dadinhos.forEach(pessoinha => {
                let linha = document.createElement('tr');

                linha.innerHTML =
                "<td>" + pessoinha.nome + "</td>" + 
                "<td>" + pessoinha.idade + "</td>" +
                "<td>" + pessoinha.cor + "</td>" +
                "<td>" + pessoinha.time + "</td>" +
                "<button>" + pessoinha.time + "</td>" +
                tablet.appendChild(linha);
            });
        }) 
}