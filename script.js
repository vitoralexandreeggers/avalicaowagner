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

async function giovanalinda() {
    const destino = document.getElementById('giovana');
    if (!destino) return;

    try {
        const response = await fetch('dados.json');
        
        if (!response.ok) {
            throw new Error('Falha ao carregar dados');
        }
        
        const pessoas = await response.json();

        destino.innerHTML = '';

        pessoas.forEach(item => {
            const linha = document.createElement('tr');
        
            linha.innerHTML = `
                <td>${item.nome}</td>
                <td>${item.idade}</td>
                <td>${item.cor}</td>
                <td>${item.time}</td>
                <td><button type="button">Botar</button></td>
            `;

            destino.appendChild(linha);
        });
        
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    } 
}
