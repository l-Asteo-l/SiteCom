const rates ={};
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementBYN = document.querySelector('[data-value="BYN"]');

getCurrencies();

setInterval(getCurrencies, 1000);

async function getCurrencies () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;

    rates.USD = result.Valute.USD;
    rates.EUR = result.Valute.EUR;
    rates.BYN = result.Valute.BYN;

    console.log(rates);

    elementUSD.textContent = rates.USD.Value;
    elementEUR.textContent = rates.EUR.Value;
    elementBYN.textContent = rates.BYN.Value;
}

input.oninput = convertValue;
select.oninput = convertValue;

function convertValue() {
    result.value = (parseFloat(input.value) / rates[select.value].Value.toFixed(2));
}