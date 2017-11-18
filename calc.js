'use strict';
/*Capture command line arguments in array through argv.

Create a flag to test if function has run yet.

We will iterate through the values to determine whether the value is a string or integer.

Push string values into string array, push number values into number array.

unshift first value in string array and compare/match to four string/math function values.

Once it matches, unshift first two numbers in number array and return value of math function performed on the numbers.

Set flag to show calc has been run.

Set previous result as new value a.

Unshift next string from string array and compare to math strings.

Unshift next number from number array and return value of math function perfomed on the numbers.

Repeat.

If string === -v || --verson : return version string.

if string === -h || --help : return directions .*/

// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// let initialArgs = process.argv.slice(2);
const initialArgs = process.argv.slice(2);

const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mult: (a, b) => a * b,
  div: (a, b) => a / b,
  pow: (a, b) => a ** b,
  help:
    'USE: enter an operation follow by the two numbers to perfom the operation on. Operations can be chained by entering an additional operator followed by one additional number to be operated on. Chained operations are performed on the resulting value of the initial operation. Operators: add[addition], sub[subtract], mult[multiply], div[divide], pow[exponential]',
  version: 'VERSION: 1.0.0'
};

const argPrep = array => {
  let funcArray = [];
  let numbArray = [];
  array.forEach(val => {
    if (Number(val)) {
      numbArray.push(Number(val));
    } else {
      funcArray.push(val);
    }
  });
  return [numbArray, funcArray];
};

const sum = array => {
  let result = array[0].reduce((a, b) => {
    return calculator[array[1].shift()](a, b);
  });
  return result;
};

const runCalc = initialArray => {
  let arrays = argPrep(initialArray);
  console.log(sum(arrays));
  finish();
};

const finish = () => process.exit();

const inputCheck = input => {
  if (input[0] === '-h' || input[0] === '--help') {
    console.log(calculator.help);
  } else if (input[0] === '-v' || input[0] === '--version') {
    console.log(calculator.version);
  } else {
    runCalc(initialArgs);
  }
};

inputCheck(initialArgs);
