//importacao

import showWeatherData from "./showWeatherData.js";



//variaveis
const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');
const sugestionsContainer = document.querySelector('.sugestions')
const botao = document.querySelector('#pesquisa');
const pegaCep = document.querySelector("#cep");

const procurarPorCep = document.querySelector('.procurar-por-cep')
const procurarPorCidade = document.querySelector('.procurar-por-cidade')
const cepEscondido = document.querySelector('.cepEscondido')
const cidadeEscondida = document.querySelector('.cidadeEscondida')


//fucoes

procurarPorCep.addEventListener('click', e => {
    cepEscondido.classList.remove( 'hide')
    cidadeEscondida.classList.add('hide')
    procurarPorCep.classList.add('hide')
    procurarPorCidade.classList.remove('hide')
})

procurarPorCidade.addEventListener('click', e => {
    cidadeEscondida.classList.remove( 'hide')
    cepEscondido.classList.add('hide')
    procurarPorCidade.classList.add('hide')
    procurarPorCep.classList.remove('hide')
})


//busca cep

async function findPostalCode(cep){

    const url = `https://viacep.com.br/ws/${cep}/json`
    
    let value = await fetch(url)
      .then(response => {
        // console.log(response) 
        return response.json()
        })
        .catch((e) =>{ 
          return Error(e)
        })
        
    return value ;
    

}


// iconeSugestao.addEventListener('click', (city) => {
//    console.log('oi')
// })


//eventos

//previne o evento "click" do botao de pesquisa por cel

botao.addEventListener("click", (e) => {
    e.preventDefault();
    const cep = pegaCep.value

    if(cep.length === 8) {
        
        findPostalCode(cep).then(function (result) {
            update(result)
            
        })

        const update = (result) => {
            let cidade = result.localidade
            let cep = result.cep
            // cepDinamico.innerHTML = `CEP: ${cep}`
            console.log(cidade)
            showWeatherData(cidade)
        }
        
    } 
    
})
searchBtn.addEventListener('click', (e)=> {
    
    e.preventDefault();
    
    const city = cityInput.value;
    showWeatherData(city)

})

// Pressionar enter faz clicar

cityInput.addEventListener("keyup" , e => {

    if(e.code === 'Enter') {
        const city = e.target.value;
        showWeatherData(city)
    }
})





const altonia = document.querySelector('#altônia')
const fortaleza = document.querySelector('#fortaleza')
const berlim = document.querySelector('#berlim')
const tokyo = document.querySelector('#tokyo')
const paris = document.querySelector('#paris')
const moscou = document.querySelector('#moscou')
const sugestoes = document.querySelector('#sugestoesBtn')

sugestoes.addEventListener("click", (e)=> {
    sugestoes.classList.add('hide')
    sugestionsContainer.classList.remove('hide')
})


altonia.addEventListener('click', e => {
    showWeatherData('altônia')
})
fortaleza.addEventListener('click', e => {
    showWeatherData('fortaleza')
})
berlim.addEventListener('click', e => {
    showWeatherData('berlim')
})
tokyo.addEventListener('click', e => {
    showWeatherData('tokyo')
})
paris.addEventListener('click', e => {
    showWeatherData('paris')
})
moscou.addEventListener('click', e => {
    showWeatherData('moscou')
})
