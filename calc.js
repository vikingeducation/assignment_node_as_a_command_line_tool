// use process.argv
//loop
// check for keywords like add/sub/div/mult
// depending keyword, carry out operations for all the numbers following until we hit a string


function calc() {
  let sum = 0;
  let func = "";
  let arg = process.argv;
  let debugMode = 0;
  let debugOutput = "";

  if (arg[2] === '--debug' || arg[2] === '-d') {
    debugMode = 1;
  }

  for (let i = 2; i < arg.length; i++) {
    if (!(isNaN(arg[i]))) {
      let num = parseInt(arg[i]);
      switch (func) {
        case "add":
        	debugOutput += ` ${arg[i]}`;
        	// console.log(debugOutput)
          sum = (sum + num);
          break;
        case "sub":
        	debugOutput += ` ${arg[i]}`;
          sum = (sum - num);
          break;
        case "mult":
        	debugOutput += ` ${arg[i]}`;
          sum = (sum * num);
          break;
        case "div":
        	debugOutput += ` ${arg[i]}`;
          sum = (sum / num);
          break;
      }
    } else if (typeof arg[i] === "string") {
      if (arg[i] === '-h' || arg[i] === '--help') {
        return 'To use the calculate, type: node calc.js <operator> <numbers>. These operations are chainable.';
      }

      if (arg[i] === '-v' || arg[i] === '--version') {
        return '0.0.1';

      } else {

        switch (arg[i]) {
          case "add":
            func = "add";

            if (debugMode === 1) {
            	debugOutput += ` = ${sum}`;
              console.log(debugOutput);

              debugOutput = func;
            } 

            break;
          case "sub":

            func = "sub";

            if (debugMode === 1) {
            	debugOutput += ` = ${sum}`;
              console.log(debugOutput);

              debugOutput = func;
            } 

            break;
          case "div":



            if (i === 2) {
              sum = arg[3];
              i++;
            }

            func = "div";

            if (debugMode === 1) {
            	debugOutput += ` = ${sum}`;
              console.log(debugOutput);

              debugOutput = func;
            } 

            break;
          case "mult":

            if (i === 2) {
              sum = 1;
            }

            func = "mult";

            if (debugMode === 1) {
            	debugOutput += ` = ${sum}`;
              console.log(debugOutput);

              debugOutput = func;
            } 

            break;
        }
      }
    }
  }

  return sum;
}

function calcOutput() {
  console.log(calc());
}

calcOutput();
