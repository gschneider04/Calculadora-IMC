/* ADICIONANDO A MUDANÇA DE TEMA */

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})


/* CRIANDO AS VARIAVEIS PARA ARMAZENAR OS VALORES DOS INPUTS */
const nome = document.querySelector('#nome')
const idade = document.querySelector ('#idade')
const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')


/* CRIANDO A VARIAVEL DE CALCULO */

const calcIMC = () => {
    /* AQUI VAMOS ADICIONAR UMA VERIFICAÇÃO PARA NÃO GERAR ERRO NA APLICAÇÃO E DEIXAR COMO VALOR NULO */
    if (nome.value != '' && altura.value != '' && peso.value != '' ) {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''

        
        if (imc < 18.5) {
            classification = 'Cuidado! Você está Abaixo do Peso!'
        } else if (imc <25) {
            classification = 'Você está com o Peso Ideal :)'
        } else if (imc < 30) {
            classification = 'Você está com sobrepeso!'
        } else if (imc < 35) {
            classification = 'Cuidado! Você está com Obesidade Moderada.'
        } else if (imc < 41) {
            classification = 'Cuidado!! Obesidade severa!'
        } else {
            classification = 'Cuidado! Você está com obesidade morbida!'
        }

        resultado.innerHTML = `Olá ${nome.value}, você tem ${idade.value} anos e nasceu em ${2023 - idade.value}. <br>
        Você tem ${altura.value}m de altura, pesa ${peso.value}kg e seu IMC é: ${imc} <br> ${classification}`
    } else {
        alert('Preencha todos os campos!!')
        resultado.innerHTML = ''
    }

    
}