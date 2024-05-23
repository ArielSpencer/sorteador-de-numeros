function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let intervalo = (ate-de+1);

    let numerosSorteados = [];
    let numero;

        if (intervalo < quantidade) {
        alert ('O intervalo de números deve ser maior que a quantidade de números sorteados');
        reiniciar();
        } else {
            for (let i = 0; i < quantidade; i++) {
                numero = obterNumeroAleatorio(de, ate);

                while (numerosSorteados.includes(numero)) {
                    numero = obterNumeroAleatorio(de, ate);
                }

                numerosSorteados.push(numero);
            }
        }

    if (de < ate) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
        alterarStatusBotao();
        alterarStatusBotaoSortear();
                } else {
                alert ('O número mínimo deve ser menor que o número máximo');
                reiniciar();
        }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        } else {
            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');
    }
}

function alterarStatusBotaoSortear() {
    let botaoSortear = document.getElementById('btn-sortear');
        if (botaoSortear.classList.contains('container__botao')) {
            botaoSortear.classList.remove('container__botao');
            botaoSortear.classList.add('container__botao-desabilitado');
            } else {
                botaoSortear.classList.remove('container__botao-desabilitado');
                botaoSortear.classList.add('container__botao');
        }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
    alterarStatusBotaoSortear();
}