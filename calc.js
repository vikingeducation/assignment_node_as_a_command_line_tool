// map user input to JS functions with an object
const funcs = {
  'add': '+',
  'sub': '-',
  'mult': '*',
  'div': '/'
};
var version = '1.0.0';
var help = `Command-Line Calculator
===========
Use commands and arguments to perform calculations
and receive the result in the command-line.

The following commands are available:
  add (addition)
  sub (subtraction)
  mult (multiplication)
  div (division)`;

// use process.argv array to get arguments
// if userinput is -v or --version or -h or --help , show relevant info
var cmd = process.argv[2];
if (cmd === '-v' || cmd === '--version') {
  console.log(version);
} else if (cmd === '-h' || cmd === '--help') {
  console.log(help);
}




// store output of previous subcommand in variable and forward
// to next subcommand to allow subcommand chaining
