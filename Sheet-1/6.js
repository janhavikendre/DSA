//Input currency in rupees and output in USD.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter currency in rupees: ', (rupeesStr) => {
    const rupees = parseFloat(rupeesStr);
    const usd = rupees / 74.85;

    console.log(`The equivalent amount in USD is: ${usd}`);

    rl.close();
});