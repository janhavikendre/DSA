//Take in two numbers and an operator (+, -, *, /) and calculate the value. (Use if conditions)


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (num1Str) => {
  rl.question('Enter second number: ', (num2Str) => {
    rl.question('Enter operator (+, -, *, /): ', (operator) => {
      const num1 = parseFloat(num1Str);
      const num2 = parseFloat(num2Str);
      let result;

      if (operator === '+') {
        result = num1 + num2;
      } else if (operator === '-') {
        result = num1 - num2;
      } else if (operator === '*') {
        result = num1 * num2;
      } else if (operator === '/') {
        if (num2 === 0) {
          console.log("Error: Division by zero is not allowed.");
        } else {
          result = num1 / num2;
        }
      } else {
        console.log("Invalid operator.");
      }

      if (result !== undefined) {
        console.log(`${num1} ${operator} ${num2} = ${result}`);
      }

      rl.close();
    });
  });
});