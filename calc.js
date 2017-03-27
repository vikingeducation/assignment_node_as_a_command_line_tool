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


let cmd = process.argv.slice(2);

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
  let firstOperator = command.shift();
  let firstNum = Number(command.shift());
  let secondNum = Number(command.shift());
  let result = calculate(firstOperator, firstNum, secondNum);

  while (command.length) {
    let operator = command.shift();
    let num = Number(command.shift());
    result = calculate(operator, result, num);
  }

  return result;
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




