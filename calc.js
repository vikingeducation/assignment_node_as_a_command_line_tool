var fs = require('fs');
var cp = require('child_process');

var version = 'Version: 1.0.0';
var help = "How to Use this Calculator\n--------------------------\nYour command options are\nadd | sub | mult | div\n\nAppend your commands like this\nnode calc.js add 2 3\n\nYour answer will be 5.\nYou can chain commands like this\nnode calc.js add 2 3 sub 1\n\nYour answer will be 4.";

var calculator = {
  add: function (a, b) { return a + b },
  sub: function (a, b) { return a - b },
  mult: function (a, b) { return a * b },
  div: function (a, b) { return a / b }
};

process.stdin.resume();
process.stdin.setEncoding('utf8');

var args = process.argv.slice(2);

if (args.includes('-v') || args.includes('--version')) {
  console.log(version);
} else if (args.includes('-h') || args.includes('--help')) {
  console.log(help);
} else {
  var result = calculator[`${args[0]}`](parseInt(args[1]), parseInt(args[2]));
  console.log(result);
}

process.exit();
