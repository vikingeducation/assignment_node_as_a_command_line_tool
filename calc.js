var isFirst = true;
var isDebugEnabled = false;
let args = process.argv.slice(2, process.argv.length);

const getValues = (args, i, result) => {
  if (isFirst) {
    isFirst = false;
    let firstTerm = parseInt(args[i + 1]);
    let secondTerm = parseInt(args[i + 2]);
    return [firstTerm, secondTerm];
  } else {
    let firstTerm = parseInt(result);
    let secondTerm = parseInt(args[i + 1]);
    return [firstTerm, secondTerm];
  }
}

const checkDebug = (values, result, method) => {
  if (isDebugEnabled) {
    console.log(`${ method } ${ values[0] } ${ values [1] } => ${ result }`);
  }
};

if (args.length === 1) {
  if (args[0] === "-v" || args[0] === "--version") {
    console.log("calc v1.0.0");
  } else if (args[0] === "-h" || args[0] === "--help") {
    console.log("Usage:\n", 
      "node calc add <num1> <num2> : Adds num1 to num2\n", 
      "node calc mult <num1> <num2> : Multiplies num1 to num2\n",
      "node calc sub <num1> <num2> : Subtracts num2 from num1\n",
      "node calc div <num1> <num2> : Divides num1 by num2\n",
      "node calc pow <num1> <num2> : Raises num1 by num2\n",
      "node calc sqrt <num1> : Finds the square root of num1\n\n",
      "Commands return the result and allow a further command to be chained\n\n",
      "Example: node calc add 5 6 sub 7\n\n",
      "This adds 5 to 6 and returns 11. Then, 7 is subtracted from 11 to return 4.\n"
      );
  }
} else {
  if (args[0] === "-d" || args[0] === "--debug") {
    isDebugEnabled = true;
  }
  var result;
  args.forEach((argument, i) => {
    if (argument === "add") {
      let values = getValues(args, i, result);
      result = values[0] + values[1];
      checkDebug(values, result, "add");
    } else if (argument === "mult") {
      let values = getValues(args, i, result);
      result = values[0] * values[1];
      checkDebug(values, result, "mult");
    } else if (argument === "sub") {
      let values = getValues(args, i, result);
      result = values[0] - values[1];
      checkDebug(values, result, "sub");
    } else if (argument === "div") {
      let values = getValues(args, i, result);
      result = values[0] / values[1];
      checkDebug(values, result, "div");
    } else if (argument === "pow") {
      let values = getValues(args, i, result);
      result = Math.pow(values[0], values[1]);
      checkDebug(values, result, "pow");
    } else if (argument === "sqrt") {
      let values;
      if (isFirst) {
        // empty string in order for debug command to not print undefined
        values = [args[i + 1], ""];
      } else {
        values = [result, ""];
      }
      result = Math.sqrt(values[0]);
      checkDebug(values, result, "sqrt");
    }
  });
  console.log(result);
}