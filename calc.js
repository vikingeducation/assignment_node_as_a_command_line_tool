const args = process.argv;
const calcArgs = args.slice(2);
let operation = calcArgs[0];
let leftNum = calcArgs[1];
let rightNum = calcArgs[2];


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
