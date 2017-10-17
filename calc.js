var child_process = require("child_process");

// Version number and help
if (process.argv[2] === "-v" || process.argv[2] === "--version") {
  console.log("1.0");
} else if (process.argv[2] === "-h" || process.argv[2] === "--help") {
  console.log(`To use the calculator, enter an operator and two numbers
to perform the operation on. Subcommands can be performed by adding an
additional parameter and another number to be executed on the current total.`);
}

// Define
/* While the current index is less than or equal to the total number of arguments
If there's not a running totals (if it's not a number yet)
    Take the current index (start at 2) and pass it in as operations.blank
    Pass in next two argvs as a and b
    Save result to running total variable
    Add 3 to current index
  If running total is a number
    Take current index and pass it in as operations.blank
    Pass in current total as a and next index as b
    Return result to total variable
  */

// Define operation functions
var operations = {
  add: function(a, b) {
    return Number(a) + Number(b);
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
};

var total;

if (process.argv[2] === "add") {
  total = operations.add(process.argv[3], process.argv[4]);
  process.stdout.write(`Process STDOUT: ${total}
`);
} else if (process.argv[2] === "sub") {
  total = operations.subtract(process.argv[3], process.argv[4]);
  process.stdout.write(`Process STDOUT: ${total}
`);
} else if (process.argv[2] === "mult") {
  total = operations.multiply(process.argv[3], process.argv[4]);
  process.stdout.write(`Process STDOUT: ${total}
`);
} else if (process.argv[2] === "div") {
  total = operations.divide(process.argv[3], process.argv[4]);
  process.stdout.write(`Process STDOUT: ${total}
`);
}
