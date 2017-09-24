const args = process.argv;
const maybeOptions = args[2];
const version = '1.0.0';
const helpText = "How to use the calculator: \n" + "  1. For basic calculator functions, use the following format: \n"
+ "     'node filename.js operation num1 num2'\n" + "  2. For chainable calculator functions, use the following format: \n"
+ "     'node filename.js operation num1 num2 operation num3...'\n" + "  Allowable operations include: 'add', 'sub', 'div', 'mult'.\n"


function calc(leftNum, operation, rightNum) {
  switch (operation) {
    case 'add':
      return eval(`${leftNum} + ${rightNum}`);
    case 'sub':
      return eval(`${leftNum} - ${rightNum}`);
    case 'div':
      return eval(`${leftNum} / ${rightNum}`);
    case 'mult':
      return eval(`${leftNum} * ${rightNum}`);
  }
}



if (maybeOptions === '-v' || maybeOptions === '--version') {
  process.stdout.write(`Version: ${version} \n`);
} else if (maybeOptions === '-h' || maybeOptions === '--help') {
  process.stdout.write(helpText);
} else {

  const calcArgs = args.slice(2);
  let operation = calcArgs[0];
  let leftNum = calcArgs[1];
  let rightNum = calcArgs[2];

  let returnedVal = calc(leftNum, operation, rightNum);


  if (calcArgs.length === 3) {
    process.stdout.write(returnedVal.toString() + '\n');
  } else {

    for (let i = 3; i <= calcArgs.length - 2; i += 2) {
      operation = calcArgs[i];
      rightNum = calcArgs[i + 1];
      leftNum = returnedVal;

      returnedVal = calc(leftNum, operation, rightNum);
    }

    process.stdout.write(returnedVal.toString() + '\n');
  }
}
