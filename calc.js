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

let runyet = false;

let result = 0;

const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mult: (a, b) => a * b,
  div: (a, b) => a / b,
  pow: (a, b) => a ** b
};

const argPrep = array => {
  let funcArray = [];
  let numbArray = [];
  array.forEach(val => {
    if (Number(val)) {
      numbArray.push(val);
    } else {
      funcArray.push(val);
    }
  });
  let sum = numbArray.reduce((a, b) => {
    return calculator[funcArray.shift()](a, b);
  });
  return sum;
};

// process.stdout.setEncoding('utf8');
// process.stdout.on('data', result => console.log(result));

console.log(argPrep(['pow', '5', '2', 'mult', '7']));
