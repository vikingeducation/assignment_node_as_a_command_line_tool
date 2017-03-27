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

for (var i = 0; i < inputArr.length; i++) {
  if (inputArr[i] === "-v" || inputArr[i] === "--version") {
    console.log("Calculator version is: 1.0.0");
  } else if (inputArr[i] === "-h" || inputArr[i] === "--help") {
    console.log(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );
  } else if (
    calcOps.includes(inputArr[i]) && calcOps.includes(inputArr[i + 2])
  ) {
    result = doCalc(inputArr[i], result, inputArr[i + 1]);
    i += 1;
    console.log(result);
    //doCalc = function(arguenst)
  } else {
    result = doCalc(inputArr[i], inputArr[i + 1], inputArr[i + 2]);
    i += 2;
    console.log(result);
  }
  //console.log(`${index}: ${val}`);
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
