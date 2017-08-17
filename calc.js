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
if (process.argv[2] === '-v' || process.argv[2] === '--version') {
  console.log(process.version);
}
