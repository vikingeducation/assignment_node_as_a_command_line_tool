//maping will be done with stdin resume()
// use argv[2] operation
//read through the array and
// if its !number it an operation
//    use switch to verify it is one of the defined operations
//    u
// if (-v || --version)
//print version 1.0.0
//else if( -h || --help)
//print enter lorem ipsom
//else if(add)
//

const calcOps = ["add", "sub", "mult", "div", "pow"];
const specialOps = ["sqrt", "abs", "ln", "log", "sin", "cos", "tan"];
var inputArr = process.argv;
var debugFlag = false;
var result = 0;
var start = 0;

initialCheck(inputArr[2]);

function runCalc() {
  if (!calcOps.includes(inputArr[2]) && !specialOps.includes(inputArr[2])) {
    console.log("Invalid input");
  } else {
    if (specialOps.includes(inputArr[2])) {
      result = doSpecialCalc(inputArr[2], inputArr[3]);
      start = 4;
      if (debugFlag) {
        console.log(`${inputArr[2]} ${inputArr[3]} => ${result}`);
      }
    } else {
      result = doCalc(inputArr[2], inputArr[3], inputArr[4]);
      start = 5;
      if (debugFlag) {
        console.log(
          `${inputArr[2]} ${inputArr[3]} ${inputArr[4]} => ${result}`
        );
      }
    }

    for (var i = start; i < inputArr.length; i += 2) {
      var tempResult = result;
      if (specialOps.includes(inputArr[i])) {
        result = doSpecialCalc(inputArr[i], result);

        if (debugFlag) {
          console.log(`${inputArr[i]} ${tempResult} => ${result}`);
        }
        i--;
      } else if (calcOps.includes(inputArr[i])) {
        result = doCalc(inputArr[i], result, inputArr[i + 1]);
        if (debugFlag) {
          console.log(
            `${inputArr[i]} ${tempResult} ${inputArr[i + 1]} => ${result}`
          );
        }
      } else {
        result = "Invalid Input";
        break;
      }
    }
    console.log("Calculator output is: " + result);
  }
}

function initialCheck(input) {
  switch (input) {
    case "-v":
    case "--version":
      console.log("Calculator version is: 1.0.0");
      break;
    case "-h":
    case "--help":
      console.log(
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      );
      break;
    case "-d":
    case "--debug":
      debugFlag = true;
      inputArr.splice(2, 1); // removing "-d" or "--debug" from the inputArr
    default:
      runCalc();
  }
}

function doCalc(op, val1, val2) {
  val1 = Number(val1);
  val2 = Number(val2);
  switch (op) {
    case "add":
      return val1 + val2;
    case "sub":
      return val1 - val2;
    case "mult":
      return val1 * val2;
    case "div":
      return val1 / val2;
    case "pow":
      return Math.pow(val1, val2);
  }
}

function doSpecialCalc(op, val) {
  val = Number(val);
  switch (op) {
    case "sqrt":
      return Math.sqrt(val);
    case "abs":
      return Math.abs(val);
    case "ln":
      return Math.log(val);
    case "log":
      return Math.log10(val);
    case "sin":
      return Math.sin(val);
    case "cos":
      return Math.cos(val);
    case "tan":
      return Math.tan(val);
  }
}
