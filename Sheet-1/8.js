//To find out whether the given String is Palindrome or not.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (str) => {
    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    if (str === reversedStr) {
        console.log('The string is a palindrome.');
    } else {
        console.log('The string is not a palindrome.');
    }

    rl.close();
});