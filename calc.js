// Pseudocode
// How will you map user input to JavaScript functions?
// How will you properly pass arguments to subcommands to the appropriate function?
// How will you enable subcommand chaining?
// How will you allow options like -h and -v and their aliases --help and --version to output the correct information?

// if the value is integer, we use it as arguments
// if the value is sub, add ... we will access function and add two follwoing arguments
// I might enable subcommand chaining by iterating through every value, and holding temp score which will be passed further to other functions
// ie. add(total?, val) add 5 5 => total is 10
// sub(total?, val)
// -h, --help, --version, -v will be another data in the object accessible
// we need stdout to return the value



var args = process.argv.slice(2, process.argv.length);

var calc = function (operation, a, b) {
  switch (operation) {
    case 'sub':
      return a - b;
    case 'add':
      return a + b;
    case 'mult':
      return a*b;
    case 'div':
      return a/b;
  }
}

var val1, val2, operation;

args.forEach( function(val, idx) {

  if (val == '-h' || val == '--help' ) {
    console.log('Explanation of how to use the calculator');
  } else if (val == '-v' || val == '--version' ) {
    console.log('1.0');
  } // first this condition before calculating

  if ( isNaN( parseInt(val) ) ) {
      operation = val;
  } else {
    if (!val1) {
      val1 = parseInt(val) ;
    } else {
      val2 = parseInt(val) ;
      val1 = calc(operation, val1, val2);
    }
  }
})

console.log( val1 );

// console.log(args);
