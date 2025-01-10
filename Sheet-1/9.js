//To find Armstrong Number between two given number.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the lower limit: ', (lowerLimitStr) => {
    rl.question('Enter the upper limit: ', (upperLimitStr) => {
        const lowerLimit = parseInt(lowerLimitStr);
        const upperLimit = parseInt(upperLimitStr);

        console.log(`Armstrong numbers between ${lowerLimit} and ${upperLimit} are:`);

        for (let i = lowerLimit; i <= upperLimit; i++) {
            let numberOfDigits = i.toString().length;
            let sum = 0;
            let temp = i;

            while (temp > 0) {
                let remainder = temp % 10;
                sum += remainder ** numberOfDigits;
                temp = parseInt(temp / 10);
            }

            if (sum === i) {
                console.log(i);
            }
        }

        rl.close();
    });
});
  