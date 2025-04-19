function formatarData(data) {
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let horas = String(data.getHours()).padStart(2, '0');
    let minutos = String(data.getMinutes()).padStart(2, '0');
    return `${dia}/${mes}/${ano} ${horas}h${minutos}`;
}

function calcularTempoDecorrido(dataModificada) {
    let agora = new Date();
    let diferencaMs = agora - dataModificada;
    let diferencaHoras = Math.floor(diferencaMs / (1000 * 60 * 60));

    if (diferencaHoras < 1) {
        let diferencaMinutos = Math.floor(diferencaMs / (1000 * 60));
        return `Atualizado há ${diferencaMinutos} minutos`;
    } else if (diferencaHoras < 24) {
        return `Atualizado há ${diferencaHoras} horas`;
    } else {
        let diferencaDias = Math.floor(diferencaHoras / 24);
        return `Atualizado há ${diferencaDias} dias`;
    }
}

// Obtém a última modificação do documento
let lastMod = new Date(document.lastModified);

// Formata a data e calcula o tempo decorrido
let dataFormatada = formatarData(lastMod);
let tempoDecorrido = calcularTempoDecorrido(lastMod);

// Exibe a data na página
document.getElementById("lastUpdated").innerHTML = `${dataFormatada} — ${tempoDecorrido}`;