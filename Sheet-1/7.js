//To calculate Fibonacci Series up to n numbers.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number of terms: ', (nStr) => {
    const n = parseInt(nStr);
    let n1 = 0, n2 = 1, nextTerm;

    console.log('Fibonacci Series:');

    for (let i = 1; i <= n; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    rl.close();
});