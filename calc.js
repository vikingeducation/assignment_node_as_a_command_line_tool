//get non path arguments into an array
let argArray = process.argv.slice(2, (process.argv.length));
let result = 0;
if (argArray.length != 0) {
//check the first statement(only one where version/etc are valid), also takes different # of params
  switch (argArray[0]) {
    case 'add':
      result += (parseInt(argArray[1]) + parseInt(argArray[2]));
      argArray.shift();
      argArray.shift();
      argArray.shift();
      break;
    case 'sub':
      result += (parseInt(argArray[1]) - parseInt(argArray[2]));
      argArray.shift();
      argArray.shift();
      argArray.shift();
      break;
    case 'div':
      result += (parseInt(argArray[1]) / parseInt(argArray[2]));
      argArray.shift();
      argArray.shift();
      argArray.shift();
      break;
    case 'mult':
      result += (parseInt(argArray[1]) * parseInt(argArray[2]));
      argArray.shift();
      argArray.shift();
      argArray.shift();
      break;
  }
}
//check next statements, applies them to results
while (argArray.length != 0) {
  switch (argArray[0]) {
    case 'add':
      result += + parseInt(argArray[1]);
      argArray.shift();
      argArray.shift();
      break;
    case 'sub':
      result -= parseInt(argArray[1]);
      argArray.shift();
      argArray.shift();
      break;
    case 'div':
      result /= parseInt(argArray[1]);
      argArray.shift();
      argArray.shift();
      break;
    case 'mult':
      result *= parseInt(argArray[1]);
      argArray.shift();
      argArray.shift();
      break;
  }
}
console.log(result);
