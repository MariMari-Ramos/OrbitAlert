import {
    impactos,
    estados
}
from "../dados/simulador-data.js";

function initSimulador() {

    const intensidade =
        document.getElementById("intensidade");

    const valor =
        document.getElementById("valorIntensidade");

    const btn =
        document.getElementById("btnSimular");

    const resultado =
        document.getElementById("resultado");

    if (
        !intensidade ||
        !valor ||
        !btn ||
        !resultado
    ) {
        return;
    }

    intensidade.addEventListener(
        "input",
        () => {

            valor.textContent =
                intensidade.value;

        }
    );

    btn.addEventListener(
        "click",
        () => {

            const estado =
                document.getElementById("estado").value;

            const evento =
                document.getElementById("evento").value;

            const nivel =
                Number(intensidade.value);

            let risco = "";

            if (nivel < 25) {

                risco = "Baixo";

            }

            else if (nivel < 50) {

                risco = "Moderado";

            }

            else if (nivel < 75) {

                risco = "Alto";

            }

            else {

                risco = "Extremo";

            }

            const dadosEvento =
                impactos[evento];

            const dadosEstado =
                estados[estado];

            resultado.innerHTML = `

                <h3>
                    Simulação Concluída
                </h3>

                <p>

                    <strong>Estado:</strong>

                    ${dadosEstado.nome}

                </p>

                <p>

                    <strong>Evento:</strong>

                    ${dadosEvento.nome}

                </p>

                <p class="risco-${risco.toLowerCase()}">

                    <strong>

                        Nível de risco:
                        ${risco}

                    </strong>

                </p>

                <h4>
                    Impactos Possíveis
                </h4>

                <ul>

                    ${dadosEvento.lista
                        .map(
                            item =>
                                `<li>${item}</li>`
                        )
                        .join("")}

                </ul>

                <h4>
                    População Potencialmente Afetada
                </h4>

                <p>

                    ${dadosEstado.populacaoAfetada}

                </p>

                <h4>
                    Recomendações
                </h4>

                <ul>

                    ${dadosEvento.recomendacoes
                        .map(
                            item =>
                                `<li>${item}</li>`
                        )
                        .join("")}

                </ul>

            `;

        }
    );

}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initSimulador();

    }
);