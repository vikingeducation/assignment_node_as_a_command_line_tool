// Pseudocode
// How will you map user input to JavaScript functions?
// How will you properly pass arguments to subcommands to the appropriate function?
// How will you enable subcommand chaining?
// How will you allow options like -h and -v and their aliases --help and --version to output the correct information?

// console.log(process.argv[2]);

// we get user input by accessing process.argv

// var cp = require('child_process');


var args = process.argv.slice(2, -1)
var calc = function(a,b) {
  add: function(a,b) {
    return a + b;
  },
  sub: function(a,b) {
    return a - b;
  },
  div: function(a,b) {
    return a/b;
  },
  mult: function(a,b) {
    return a*b;
  },
  total: 0;
}
args.forEach( function(val) {

} )



// if the value is integer, we use it as arguments
// if the value is sub, add ... we will access function and add two follwoing arguments
// I might enable subcommand chaining by iterating through every value, and holding temp score which will be passed further to other functions
// ie. add(total?, val) add 5 5 => total is 10
// sub(total?, val)
// -h, --help, --version, -v will be another data in the object accessible
// we need stdout to return the value
