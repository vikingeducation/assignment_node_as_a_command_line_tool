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

function newCalculator(command){
	let cmdCopy = command;
	let result;
	while (cmdCopy.length){
		let numbers = [result];
		result = nextOperation(cmdCopy, numbers);
	}
	return result;
}

function nextOperation(cmdCopy, numbers){
	let operator = cmdCopy.shift();
	while (!isNaN(cmdCopy[0]) {
		numbers.push(cmdCopy.shift());
	}
	return calculate(operator, numbers);
}


function printDebug(operator, numOne, numTwo, result) {
  console.log(`${operator} ${numOne} ${numTwo} => ${result}`);
}

function calculate(operator, numbers){
	switch (operator){
		case "add":
			return numbers[0] + numbers[1];
		case "sub":
			return numbers[0] - numbers[1];
		case "div":
			return numbers[0] / numbers[1];
		case "mult":
			return numbers[0] * numbers[1];
		case "pow":
			return Math.pow(numbers[0], numbers[1]);
		case "sqrt":
			return Math.sqrt(numbers[0])
	}
}




