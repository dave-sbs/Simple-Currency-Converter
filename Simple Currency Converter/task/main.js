const input = require('sync-input');
const exchangeRate = {
    "USD":	1.0,
    "JPY":	113.5,
    "EUR":	0.89,
    "RUB":	74.36,
    "GBP":	0.75,
}

 function introMessage(){
    console.log("Welcome to Currency Converter!")
    for (let exchangeRateKey in exchangeRate) {
        console.log("1 USD equals " + exchangeRate[exchangeRateKey] + " " + exchangeRateKey)
    }
}

function calculateExchange() {
    console.log("What do you want to convert?");
    const convertFrom = input("From: ").toUpperCase();
    if (!(Object.keys(exchangeRate).includes(convertFrom))) {
        console.log("Unknown currency");
        return;
    }

    const convertTo = input("To: ").toUpperCase();
    if (!(Object.keys(exchangeRate).includes(convertTo))) {
        console.log("Unknown currency");
        return;
    }

    const amount = Number(input("Amount: "));
    if (Number(amount) <= 0) {
        console.log("The amount cannot be less than 1");
        return;
    }
    else if (isNaN(Number(amount))) {
        console.log("The amount has to be a number");
        return;
    }

    // convert amount from initial currency to USD since USD our base of conversion.
    // Then use USD conversion to convert money to the other currency
    // USD just acts as intermediary
    // To convert to USD = Amount given in x currency/Base currency conversion of x per 1 USD
    const convertAmount = exchangeRate[convertTo] * amount/exchangeRate[convertFrom];
    console.log(`Result: ${amount} ${convertFrom} equals ${convertAmount.toFixed(4)} ${convertTo}`);
}

function main() {
    while(true) {
        introMessage();
        console.log("What do you want to do?");
        const loop = input("1-Convert currencies 2-Exit program\n");
        if (loop === "1"){
            calculateExchange();
        }
        else if (loop === "2") {
            console.log("Have a nice day!");
            break;
        }
        else {
            console.log("Unknown input");
        }
    }
}

main()





