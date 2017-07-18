let input = process.argv;


let oper = process.argv[2]; // first argument
let isDebug = false, startId = 3;

if(oper === "-h" || oper === "--help") {
  console.log("This is a help message");
  process.exit();
}

if(oper === "-v" || oper === "--version") {
  console.log("1.0");
  process.exit();
}

if (oper === '-d' || oper === '--debug') {
  isDebug = true;
  oper = process.argv[3];
  startId ++;
}

let num1 = process.argv[startId];
let result = num1;
for(let i = startId + 1; i < process.argv.length; i += 2) {
  let num2;

  if (oper === 'sqrt') {
    num2 = 0;
    i --;
  }
  else num2 = process.argv[i];
  
  result = specialMath(num1, num2, oper);

  if (isDebug) {
    print(oper, num1, num2, result);
  }
  num1 = result;

  if(process.argv.length > i + 1) {
    oper = process.argv[i + 1];
  }
}
if (oper == 'sqrt') {
  result = specialMath(num1, 0, oper);
  if (isDebug) {
    print(oper, num1, 0, result);
  }
}

console.log(result);


function print (op, num1, num2, result) {
  if (op === 'sqrt') {
    console.log(op + ' ' + num1 + ' => ' + result);  
  }
  else {
    console.log(op + ' ' + num1 + ' ' + num2 + ' => ' + result);    
  }
}

function specialMath(num1, num2, op) {
  num1 = Number(num1);
  num2 = Number(num2);

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

  throw new Error("This is an error"); 
}
