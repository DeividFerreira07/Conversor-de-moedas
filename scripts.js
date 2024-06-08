const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValuesConverted = document.querySelector(".currency-value-to-convert"); //Valor em Real
  const currencyValuesToConvert = document.querySelector(".currency-value"); // Outras Moedas

  const dolarToday = 5.0;
  const euroToday = 5.46;

  if (currencySelect.value == "dolar") {
    currencyValuesConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValuesConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  currencyValuesToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-img")

if (currencySelect.value == "dolar"){
  currencyName.innerHTML = "Dolar americano"
  currencyImage.src = "./assets/dolar.png"
}

if (currencySelect.value == "euro"){
  currencyName.innerHTML = "Euro"
  currencyImage.src = "/assets/euro.png"
}


convertValues()
}

currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues);
