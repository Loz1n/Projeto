const btnAvacar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvacar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1
    if (ehUltimoCartao) return;
    EsconderCartaoSelecionado();
    cartaoAtual++;
    MostrarCartao();
});

btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0;
    if (ehPrimeiroCartao) return;
    EsconderCartaoSelecionado();
    cartaoAtual--;
    MostrarCartao();
});

function MostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function EsconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
