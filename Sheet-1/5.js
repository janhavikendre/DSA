//Take 2 numbers as input and print the largest number.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first number: ', (num1Str) => {
    rl.question('Enter second number: ', (num2Str) => {
        const num1 = parseFloat(num1Str);
        const num2 = parseFloat(num2Str);
        let result;

        if (num1 > num2) {
            result = num1;
        } else {
            result = num2;
        }

        console.log(`The largest number is: ${result}`);

        rl.close();
    });
});