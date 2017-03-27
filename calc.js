// If flag, use case statement
// Otherwise run calculator

// add 5 5 sub 3 mult 6

// var result,
// result = result of first operation;
// while array.length {
// 	var command = array.shift;
// 	var number = array.shift;
// 	result = command(result, number)
// }

// Split the statement into an array
// Parse the array by checking if element is number
// Perform operation on current statement


const cmd = process.argv.slice(2);

let debugMode = false;


if (cmd[0][0] == "-") {
	flagParser(cmd[0]);
} else {
	console.log(runCalculator(cmd));
}


function flagParser(command){
	switch (command){
		case "-v":
		case "--version":
			console.log("Version 1.0.0")
			break;
		case "-h":
		case "--help":
			showHelp();
			break;
    case "-d":
    case "--debug":
      debugMode = true;
      console.log(runCalculator(cmd.slice(1)));
	}
}

function showHelp(){
	console.log("For a basic math operation type: <operator_type> <number1> <number2>");
	console.log("You can chain operations the following way");
	console.log("<operator_type> <number1> <number2> <operator2> <new_number>");
	console.log("For information about the calculator use '-' with the following options:");
	console.log("-h displays help info");
	console.log("-v displays the version number");
}

function runCalculator(command) {
  let cmdCopy = command;

  let firstOperator = cmdCopy.shift();
  let firstNum = Number(cmdCopy.shift());
  let secondNum = Number(cmdCopy.shift());

  let result = calculate(firstOperator, firstNum, secondNum);

  if (debugMode) printDebug(firstOperator, firstNum, secondNum, result);

  while (cmdCopy.length) {
    let operator = cmdCopy.shift();
    let num = Number(cmdCopy.shift());
    let prevResult = result;
    result = calculate(operator, result, num);

    if (debugMode) printDebug(operator, prevResult, num, result);
  }

  return result;
}

function printDebug(operator, numOne, numTwo, result) {
  console.log(`${operator} ${numOne} ${numTwo} => ${result}`);
}

function calculate(operator, a, b){
	switch (operator){
		case "add":
			return add(a, b);
		case "sub":
			return sub(a, b);
		case "div":
			return div(a, b);
		case "mult":
			return mult(a, b);
	}
}

function add(a, b){
	return a + b;
}
function sub(a, b){
	return a - b;
}
function div(a, b){
	return a / b;
}
function mult(a, b){
	return a * b;
}




