let input = process.argv;

let op = process.argv[2]; 
let isDebug = false, startId = 3;
let len = process.argv.length;

if(op === "-h" || op === "--help") {
  console.log("This is a help message");
  process.exit();
}

if(op === "-v" || op === "--version") {
  console.log("1.0");
  process.exit();
}

if (op === '-d' || op === '--debug') {
  isDebug = true;
  op = process.argv[3];
  startId ++;
}

console.log(calc (process.argv[startId], op, startId + 1));

function calc (num1, op, id) {
  let result, num2;

  // console.log('Args: ' + args);

  // console.log (num1 +  ' ' + op + ' ' + args);
  // sqrt(x), abs(x), sqr(x)...
  if (isSingleArgument(op)) {
    result = specialMathForSingle(num1, op);
  }
  else {
    num2 = process.argv[id++];
    result = specialMath(num1, num2, op);
  }

  if (isDebug) {
    print (op, num1, num2, result);
  }

  if (id < len) 
    return calc(result, process.argv[id], id + 1);

  return result;
}

function isSingleArgument(op) {
  return (op === 'sqrt' || op === 'abs');
}

function print (op, num1, num2, result) {
  if (isSingleArgument(op)) {
    console.log(op + ' ' + num1 + ' => ' + result);  
  }
  else {
    console.log(op + ' ' + num1 + ' ' + num2 + ' => ' + result);    
  }
}

function specialMathForSingle(num1, op) {
  return specialMath(num1, 0, op);
}

function specialMath(num1, num2, op) {
  num1 = Number(num1);
  num2 = Number(num2);

  // print(op, num1, num2, 0);

  if(op === "add") {
    return num1 + num2;
  }
  if(op === "sub") {
    return num1 - num2;
  }
  if(op === "mult") {
    return num1 * num2;
  }
  if(op === "div") {
    if(num2 === 0) {
      throw new Error("This is another error");
    }
    return num1 / num2;
  } 
  if (op === 'pow') {
    return Math.pow(num1, num2);
  }
  if (op === 'sqrt') {
    return Math.sqrt(num1);
  }
  if (op === 'abs') {
    return Math.sqrt(num1);
  }

  throw new Error("This is an error"); 
}
