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
const calcInfoArr = ["-v", "--version", "-h", "--help"];
const calcOps = ["add", "sub", "mult", "div"];
var inputArr = process.argv;
var result = 0;

if (inputArr[2] === "-v" || inputArr[2] === "--version") {
  console.log("Calculator version is: 1.0.0");
}
else if (inputArr[2] === "-h" || inputArr[2] === "--help") {
  console.log(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  );
}
else if (!calcOps.includes(inputArr[2])) {
  console.log("Invalid input");
}
else {
  result = doCalc(inputArr[2], inputArr[3], inputArr[4]);
  for (var i = 5; i < inputArr.length; i+=2) {
    if (!calcOps.includes(inputArr[i]) || isNaN(inputArr[i+1])) {
      result = "Invalid Input";
      break;
    }

    result = doCalc(inputArr[i], result, inputArr[i+1]);
    //console.log(result);
  }
  console.log("Calculator output is: " + result);
}

function doCalc(op, val1, val2) {
  val1 = parseInt(val1);
  val2 = parseInt(val2);
  switch (op) {
    case "add":
      return val1 + val2;
    case "sub":
      return val1 - val2;
    case "mult":
      return val1 * val2;
    case "div":
      return val1 / val2;
  }
}
