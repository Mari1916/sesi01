//criando as variáveis 
const nome = document.getElementById("nome")
const cidade = document.getElementById("cidade")
const resultado = document.getElementById("resultado")
const resultadoCid = document.getElementById("resultadoCid")

//criando função 
function limparCampo() {
    nome.value = ""
    cidade.value = ""
}
function mudar(event) {
    event.preventDefault()
    console.log(nome.value)
    console.log(cidade.value)

    //imprimir o nome na tela
    resultado.innerHTML = nome.value
    resultadoCid.innerHTML = cidade.value

    //Limpando campos
    limparCampo()
}