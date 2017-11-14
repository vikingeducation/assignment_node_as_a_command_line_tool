//----------------------------- Command Line Calculator -------------------------------

// Authors: Johann Baptista and Edwin Yung
// Contact: baptistajohann@gmail.com

// Date Started: Nov 13 2017
// Date Complete: Nov 13 2017

// -------------------------------------------------------------------------------------


let fs = require('fs');

class Calculator {
  constructor(total) {
    this.total = total;
  }

  operate(method, num) {
    this[method](num);
  }

  add(b) {
    this.total = this.total + b;
  }
  sub(b) {
    this.total = this.total - b;
  }
  div(b) {
    this.total = this.total / b;
  }
  mult(b) {
    this.total = this.total * b;
  }
}

// Remove 'node' and 'calc.js' from the arguments array
str = process.argv.slice(2);

// If user asks for version information
if (str[0] === "-v" || str[0] === "--version") {

  fs.readFile("package.json", "utf8", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data).version);
    process.exit()
  }); 

// If user asks for help
} else if (str[0] === "-h" || str[0] === "--help") { 

  console.log(`
  -------------- How to use --------------- \n
  Type -v or --version for version number \n
  Operators like 'add', 'sub', 'div', and 
  'mult' should be used as such: 

            'operator num1 num2'

  E.g. 'add 2 2' # => 4
       'sub 5 3' # => 2 \n
  You can also chain commands
  E.g. 'sub 9 5 add 2' # => 2
  `); 

// If user requests a computation
} else {

  // Switch first and second element of arguments array
  // so that if original array was ['add', 2, 3, 'sub', 1]
  // new array is '[2, 'add', '3', 'sub', '1']

  [str[0], str[1]] = [str[1], str[0]];

  // Instantiate new calculator, with initial total equal 
  // to first number typed by user

  let calc = new Calculator( parseFloat(str.shift()) );

  // Iterate through arguments array, two at a time, using
  // calculator object to maintain state

  for (let i = 0; i < str.length; i+=2) {
    calc.operate(str[i], parseFloat(str[i+1]));
  }

  // Log calculator total

  console.log(calc.total);
}
