/************************* Pseudocode **********************************

1. Get user input: argv = process.argv
2. Check parsed input:
	if argv[2] === '-v' or '--version' or '-h' or '--help'
		print relevant info
	else
		check if argv[2] is a command and next two array items are numbers
		if yes
			do operation requested in command
			while argv.length not reached
				do chaining by:
				move three places in array 
				check  argv[5] for command and arg[6] is number
				do operation  	
				continue till array .length reached
		else
			print out error message
3. print out final answer

**************************************************************************/

let args = process.argv.slice(2);
let command, int1, int2, tempArg;
let subTotal = 0;
let debugFlag = false;

while (args.length !== 0) {

  command = args.shift();

  switch (command) {
  	
	case 'add':
  	case 'sub':
  	case 'div':
  	case 'mult':
  	case 'pow':
  	
  	  tempArg = args.shift();	

  	  if (askHelp(tempArg, 2)) break;		// check if -h or --help 
	  if (!isNumber(tempArg)) break;		// error check if number or string 
 
	  if (subTotal === 0) {					// if first iteration:
	  	int1 = tempArg;						// get two numbers from arg list
	  	int2 = args.shift();
	  	if (!isNumber(int2)) break;
	  } else {								// if not, get just one number
	  	int1 = subTotal;
	  	int2 = tempArg;
	  }

	  subTotal = doMath(command, [Number(int1), Number(int2)]);

	  showDebugMode(debugFlag, command, [int1, int2], subTotal);
	  break;
	
	case 'sqrt':

	  if (subTotal === 0) {
	  	tempArg = args.shift();	
	  	if (askHelp(tempArg, 1)) break;
  	  	if (!isNumber(tempArg)) break;
  	  	int1 = tempArg;
  	  } else {
  	  	int1 = subTotal;
  	  }

	  subTotal = doMath(command, [int1]);

	  showDebugMode(debugFlag, command, [int1], subTotal);
	  break;

	case '-d':
  	case '--debug':
  	  debugFlag = true;
  	  console.log('Debug mode turned on now');
  	  break;

  	case '-v':
  	case '--version':
  	  console.log('1.0.0');
  	  break;

  	case '-h':
  	case'--help':
  	  printHelp();
  	  break;

  	case 'done':
  	  console.log("Goodbye!")
  	  process.exit();

  	default:
      console.log('Invalid input, please try again or type -h for help');
      break;
  }	

}	


//Functions called

function isNumber(num) {
  if (!Number.isInteger(parseInt(num))){
    console.log('Invalid input, please enter a number or type -h for help');
    return false;
  }

  return true;
}

function askHelp(num, numOperands) {
 if (num === '-h' || num === '--help'){
 	if (numOperands === 1) {
 	  console.log(`Usage: <${command}> <int>`);
 	} else if (numOperands === 2){
 	  console.log(`Usage: <${command}> <int> <int>`);	
 	}
 	return true;
 }
 return false;
}

function showDebugMode(flag, command, num, subTotal) {
  if (flag) {
  	if (num.length === 1) {
  	  console.log(`${command} ${num[0]} => ${subTotal}` );
  	} else if (num.length === 2){
  	  console.log(`${command} ${num[0]} ${num[1]} => ${subTotal}` );
  	}
  } else {
	console.log(`Result: ${ subTotal } `);
  }
}

function doMath(command, num){

  if (num.length === 1) {
	return Math.sqrt(num[0]);

  } else if (num.length === 2) {
	
	let num1 = num[0];
	let num2 = num[1];

	switch (command) {
	  case 'add': 
		return num1 + num2;
	  case 'sub':
	  	return num1 - num2;
	  case 'div':
	  	return num1 / num2;
	  case 'mult':
	  	return num1 * num2;
	  case 'pow':
	  	return Math.pow(num1, num2);
	  default:
	  	break;
	  }
  }	  
}

function printHelp() {

	console.log(`
  	--------- How to use calc.js ---------
  	Type "done" to exit program
	  or "-v" or "--version" for version 
	  or "-h" or "--help" for help
	  or "-d" or "--debug" for debug mode
	--------------------------------------
	Usage:  <oper> <int> <int>
	where <oper> could be: 
	  add/sub/mult/div/sqrt/pow
	--------------------------------------
	Example:  
	  add 5 10
	Or, could be chained like this:
	  add 5 10 sub 4
	--------------------------------------
		`); 
}