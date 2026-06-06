const selectEstado = document.getElementById("estado");

function atualizarPainel(sigla){

    const estado = estados[sigla];

    document.getElementById("nomeEstado").textContent =
        estado.nome;

    document.getElementById("chuva").textContent =
        estado.chuva;

    document.getElementById("queimadas").textContent =
        estado.queimadas;

    document.getElementById("seca").textContent =
        estado.seca;

    document.getElementById("risco").textContent =
        estado.risco;

    const status = document.getElementById("statusGeral");

    status.textContent =
        `Risco ${estado.risco}`;

    status.className =
        `status ${estado.risco.toLowerCase()}`;
}

selectEstado.addEventListener("change", () => {
    atualizarPainel(selectEstado.value);
});

atualizarPainel("SP");