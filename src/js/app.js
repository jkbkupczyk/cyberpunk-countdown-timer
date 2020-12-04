// DOM
const fromSelect = document.querySelector("#from");
const toSelect = document.querySelector("#to");
const base = document.querySelector("#currBase");
const validDate = document.querySelector("#validDate");
const rate = document.querySelector("#rate");

const URL = "https://api.exchangeratesapi.io/latest?base=";

function getData(currency = "EUR", selectedCurrency) {
    fetch(URL + currency.toUpperCase())
        .then(response => response.json())
        .then(data => {
            populateInputs(data.rates, selectedCurrency);
            base.innerHTML = `<strong>Base: </strong>${data.base}`;
            validDate.innerHTML = `<strong>Date: </strong>${data.date}`;
            rate.innerHTML = `<strong> 1 ${fromSelect.value} </strong> = <span> ${data.rates[toSelect.value]}</span>`;
        })
        .catch(err => console.log(`Error occured: ${err.message}`));
}

function populateInputs(data, selectedCurrency) {
    let fromOption = "";
    let toOption = "";

    for (let currency in data) {
        if (currency == selectedCurrency) {
            fromOption += `<option value=${currency} selected>${currency}</option>`;
        } else {
            fromOption += `<option value=${currency}>${currency}</option>`;
        }
        toOption += `<option value=${currency}>${currency}</option>`;
    }

    fromSelect.innerHTML = fromOption;
    toSelect.innerHTML = toOption;
}

function updateInfo(elem) {
    getData(elem.value, elem.value);
    updateRates(elem.value);
}

function updateRates(val) {
    rate.innerHTML = `<strong> 1 ${fromSelect.value} </strong> = <span> ${val} </span>`;
}

function swap() {

}