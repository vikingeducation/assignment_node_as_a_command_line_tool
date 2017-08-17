/*
----Pseudocode---
argv = process.argv

if argv[2] === -v || --version
  print version
if argv[2] === -h || --help
  print help text

var solution = 0;
argv.shift().shift();

while argv != empty
  if argv[1] && argv[2] are numbers
    if argv[0] === add
      solution = argv[1] + argv[2] + solution
      argv.shift().shift()
  else if argv[1] is a number
    if argv[0] === add
      solution += argv[1]
      argv.shift()

print solution
*/

if (process.argv[2] === '-h' || process.argv[2] === '--help') {
  console.log("---calc.js help---\nEnter node calc.js (then add,sub, mult, div) then (a)(a) \nExample: node calc.js add 5 5\n      or node calc.js add 5 5 add 6\n         Then the result will be printed\n---END---");
}
else if (process.argv[2] === '-v' || process.argv[2] === '--version') {
  console.log(process.version);
}
else {
  var solution = 0;
  argumentList = process.argv;
  argumentList.shift();
  argumentList.shift();

  while (argumentList[0] != undefined){
    //if 2 arguments
    if ( (isNaN(argumentList[1]) === false) && (isNaN(argumentList[2]) === false)) {
      if (argumentList[0] === 'add') {
        solution = Number(argumentList[1]) + Number(argumentList[2]) + solution;
      }
      else if (argumentList[0] === 'sub') {
        solution = Number(argumentList[1]) - Number(argumentList[2]) + solution;
      }
      else if (argumentList[0] === 'mult') {
        solution = Number(argumentList[1]) * Number(argumentList[2]) + solution;
      }
      else if (argumentList[0] === 'div') {
        solution = Number(argumentList[1]) / Number(argumentList[2]) + solution;
      }
      else {
        console.log("Error, please see --help");
      }
      argumentList.shift();
      argumentList.shift();
      argumentList.shift();
    }
    //if 1 argument
    else if (isNaN(argumentList[1]) === false) {
      if (argumentList[0] === 'add') {
        solution += Number(argumentList[1]);
      }
      else if (argumentList[0] === 'sub') {
        solution -= Number(argumentList[1]);
      }
      else if (argumentList[0] === 'mult') {
        solution *= Number(argumentList[1]);
      }
      else if (argumentList[0] === 'div') {
        solution /= Number(argumentList[1]);
      }
      else {
        console.log("Error, please see --help");
      }
      argumentList.shift();
      argumentList.shift();
    }

  }
  console.log(solution);
}
