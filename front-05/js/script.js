// Obtém os elementos do DOM

const valor1 = document.getElementById("valor1");
const valr2 = document.getElementById("valor2");
//Variável resultado
const resultado = document.getElementById("resultado");

//Função para limpar o campo
function limparCampo() {
  valor1.value = "";
  valr2.value = "";
  resultado.value = "";
}

// Função de tempo
function tempo() {
  setTimeout(function () {
    resultado.innerHTML = 0;
  }, 1000);
}

//Função para calcular a soma
function somar(event) {
  event.preventDefault();
  let resultadoSoma = Number(valor1.value) + Number(valr2.value);
  resultado.innerHTML = resultadoSoma;

  limparCampo();
  tempo()
}

//Função para calcular a divisão
function dividir(event) {
  event.preventDefault();
  let resultadoDivisao = Number(valor1.value) / Number(valr2.value);
  resultado.innerHTML = resultadoDivisao;

  limparCampo();
  tempo()
}

//Função para calcular a multiplicação
function multiplicar(event) {
  event.preventDefault();
  let resultadoMultiplicacao = Number(valor1.value) * Number(valr2.value);
  resultado.innerHTML = resultadoMultiplicacao;

  limparCampo();
  tempo()
}

//Função para calcular a subtração
function subtrair(event) {
  event.preventDefault();
  let resultadoSubtracao = Number(valor1.value) - Number(valr2.value);
  resultado.innerHTML = resultadoSubtracao;

  limparCampo();
  tempo()
}