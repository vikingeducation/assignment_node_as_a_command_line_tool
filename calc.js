

let result = 0;
let firstCmd = 3;
let debug = false;

switch (process.argv[2]) {
  case '-h':
  case '--help':
    console.log("Enter commands as node calc.js func val val");
    break;
  case '-v':
  case '--version':
    console.log("Version 1.0.0");
    break;
  case '-d':
  case '--debug':
    debug = true;
    firstCmd += 1;
  default:
    result = parseFloat(process.argv[firstCmd]);
    if (debug) console.log(`${process.argv[firstCmd - 1]} ${result} ${process.argv[firstCmd + 1]}`);
    doCalc(process.argv[firstCmd - 1], process.argv[firstCmd + 1]);
    for (i = firstCmd + 2; i < process.argv.length; i += 2){
      if (debug) console.log(`${process.argv[i]} ${result} ${process.argv[i + 1]}`);
      doCalc(process.argv[i], process.argv[i + 1])
      if (process.argv[i] === 'sqrt') i--;
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
    case 'pow':
      return result = Math.pow(result, parseFloat(val));
      break;
    case 'sqrt':
      return result = Math.sqrt(result);
      break;
    default:
      return false
  }
}
