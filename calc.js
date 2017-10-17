var child_process = require("child_process");

// Initiate variables for calculator total and correct starting index
var total;
var index = 2;

// Define operation functions
var ops = {
  add: function(a, b) {
    return Number(a) + Number(b);
  },
  sub: function(a, b) {
    return a - b;
  },
  mult: function(a, b) {
    return a * b;
  },
  div: function(a, b) {
    return a / b;
  }
};

// Perform each operation -- made so different
// parameters plugged in in different circumstances
var performOperation = function(operation, a, b) {
  if (operation === "add") {
    total = ops.add(a, b);
  } else if (operation === "sub") {
    total = ops.sub(a, b);
  } else if (operation === "mult") {
    total = ops.mult(a, b);
  } else if (operation === "div") {
    total = ops.div(a, b);
  }
  return total;
};

// Version number and help menu options
if (process.argv[2] === "-v" || process.argv[2] === "--version") {
  console.log("1.0");
} else if (process.argv[2] === "-h" || process.argv[2] === "--help") {
  console.log(`To use the calculator, enter an operator and two numbers
    to perform the operation on. Subcommands can be performed by adding an
    additional parameter and another number to be executed on the current total.`);
}

// Loop to run calculations
// Index is assigned 2 above in hoisted variable declarations
// On the first set of parameters, pass in two numbers as the operands
// On the second set of parameters, pass in the total and a new number as the operands
while (index <= process.argv.length) {
  if (index === 2) {
    total = performOperation(process.argv[index], process.argv[index + 1], process.argv[index + 2]);
    index += 3;
  } else {
    total = performOperation(process.argv[index], total, process.argv[index + 1]);
    index += 2;
  }
}

// Print final total
process.stdout.write(`Process STDOUT: ${total}
`);

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
