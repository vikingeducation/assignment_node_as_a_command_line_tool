let input = process.argv;


let oper = process.argv[2]; // first argument

if(oper === "-h" || oper === "--help") {
  console.log("This is a help message");
  process.exit();
}

if(oper === "-v" || oper === "--version") {
  console.log("1.0");
  process.exit();
}

let num1 = process.argv[3];
for(let i = 4; i < process.argv.length; i += 2) {
  let num2 = process.argv[i];
  num1 = specialMath(num1, num2, oper);
  if(process.argv.length > i + 1) {
    oper = process.argv[i + 1];
  }
}
console.log(num1);


function specialMath(num1, num2, op) {
  num1 = Number(num1);
  num2 = Number(num2);

  if(op === "add") {
    return num1 + num2;
  } else if(op === "sub") {
    return num1 - num2;
  } else if(op === "mult") {
    return num1 * num2;
  } else if(op === "div") {
    if(num2 === 0) {
      throw new Error("This is another error");
    }
    return num1 / num2;
  } else {
    throw new Error("This is an error");
  }
}
