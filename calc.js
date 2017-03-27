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
    case "-i":
    case "--interactive":
      interactiveMode();
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

function runCalculator(command){
	let cmdCopy = command;
	let result;
	while (cmdCopy.length){
		result = nextOperation(result, cmdCopy);
	}
	return result;
}

function nextOperation(result, cmdCopy){
  let numbers = [];
  if (result) numbers.push(result);
	let operator = cmdCopy.shift();
	while (!isNaN(cmdCopy[0])) {
		numbers.push(Number(cmdCopy.shift()));
	}
  let newResult = calculate(operator, numbers);

  if (debugMode) printDebug(operator, numbers, newResult);

  return newResult;
}


function printDebug(operator, numbers, result) {
  console.log(`${operator} ${numbers.join(" ")} => ${result}`);
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

function interactiveMode() {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  let result;

  process.stdin.on('data', (data) => {
    let input = data.trim();
    if (input === 'done') {
      console.log('Goodbye!');
      process.exit();
    }

    let cmd = input.split(" ");
    result = nextOperation(result, cmd);
    
    console.log(result);
  });
}




