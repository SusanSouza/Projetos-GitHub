/*
Projeto referente as aulas 15 a 23
*/

const button = document.getElementById("convet-button")
// console.log (button)
const select = document.getElementById("currency-select")

const dolar = 5.01
const euro = 5.52

const convertValue = () => {
    const inputReais = document.getElementById("input-real").value
    const realValueTxt = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")
    //realValueTxt.innerHTML = inputReais
    
    realValueTxt.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: 'currency',
        currency: 'BRL'
    }).format(inputReais)

    //currencyValueText.innerHTML = inputReais / dolar 
    if (select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReais / euro)
    }

    //console.log(inputReais / dolar)
    // console.log("botão acionado")
}

changeCurrency = () => {
    console.log("algo aconteceu")
}

changeCurrency = () => {
    //console.log('algo aconteceu')
    const currencyDolar = document.getElementById("currency-dolar")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === "€ Euro") {
        currencyDolar.innerHTML = "Euro"
        currencyImg.src = "../Imagens/euro.png"
    }

    if (select.value === "US$ Dólar americano") {
        currencyDolar.innerHTML = "Dólar americano"
        currencyImg.src = "../Imagens/usa.png"
    }

    if (select.value === "₿ Bitcoin") {
        currencyDolar.innerHTML = "Bitcoin"
        currencyImg.src = "../Imagens/bitcoin.png"
    }
    convertValue ()
}

button.addEventListener("click", convertValue)
select.addEventListener("change", changeCurrency)