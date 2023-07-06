
const botao = document.querySelector('#pesquisa');
const pegaCep = document.querySelector("#cep");
const msgErro = document.querySelector('#viewError')


botao.addEventListener("click", (e) => {
    e.preventDefault();
    const cep = pegaCep.value

    if(cep.length === 8) {
        console.log(cep)
        

        findPostalCode(cep).then(function (result) {
            update(result)
            
        })

        const update = (result) => {
            let cidade = result.localidade
            console.log(cidade)
        }
        
        

    } else {
        msgErro.classList.add("view-error")
    }
    
    
})




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
// const getWeatherData = async (city) => {

//     const apiWeatherURL = 
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

//     const res = await fetch(apiWeatherURL)
//     const data = await res.json()

//     return data
    
// }