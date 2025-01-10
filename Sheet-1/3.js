//Write a program to input principal, time, and rate (P, T, R) from the user and find Simple Interest.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter principal amount: ', (principalStr) => {
    rl.question('Enter time in years: ', (timeStr) => {
        rl.question('Enter rate of interest: ', (rateStr) => {
            const principal = parseFloat(principalStr);
            const time = parseFloat(timeStr);
            const rate = parseFloat(rateStr);
            const simpleInterest = (principal * time * rate) / 100;

            console.log(`The simple interest is: ${simpleInterest}`);

            rl.close();
        });
    });
});