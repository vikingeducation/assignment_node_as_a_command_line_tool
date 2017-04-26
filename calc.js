

let result = 0

switch (process.argv[2]) {
  case '-h':
  case '--help':
    console.log("Enter commands as node calc.js func val val");
    break;
  case '-v':
  case '--version':
    console.log("Version 1.0.0");
    break;
  default:
    result = parseFloat(process.argv[3]);
    result = doCalc(process.argv[2], process.argv[4]);
    for (i = 5; i < process.argv.length; i += 2){
      doCalc(process.argv[i], process.argv[i + 1])
    }
}

console.log(result);

function doCalc(cmd, val) {
  switch (cmd) {
    case 'add':
      return result += parseFloat(val);
      break;
    case 'sub':
      return result -= parseFloat(val);
      break;
    case 'div':
      return result /= parseFloat(val);
      break;
    case 'mult':
      return result *= parseFloat(val);
      break;
    default:
      return false
  }
}
