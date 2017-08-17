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
