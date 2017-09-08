
const packageJSON = require('./package');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data){

  data = data.trim();

  if (data[0] == '-' || data[0] == 'q') {
    mapFlagInput(data);
  } else {
    dataArray = data.split(" ");
    mapCalcInput(dataArray);
  }

});

//map user input based on flags or allow to quit:
function mapFlagInput(data) {

  switch (data) {
    case 'q':
    case 'quit':
    case 'exit':
      console.log('okay bye, happy calculating');
      process.stdin.pause();
      break;
    case '-h':
    case '--help':
      printHelp();
      break;
    case '-v':
    case '--version':
      console.log(`Calculator Version ${packageJSON.version}`);
      break;
    default:
      invalidInputs()
  }

};//END mapFlagInput

//parse inputs function
function mapCalcInput(dataArray) {

  //array to store calculator data and reset everytime:
  var operation;
  var subtotal;
  var operand;

  //the first value should be an operator
  operation = dataArray.shift()
  subtotal = dataArray.shift()
  operand = dataArray.shift()

  subtotal = calculator(operation, subtotal, operand);

  while (dataArray.length > 0){
    operation = dataArray.shift();
    operand = dataArray.shift();

    subtotal = calculator(operation, subtotal, operand);
  }

  console.log(subtotal);

};//END mapCalcInput


//calculator
function calculator(operation, subtotal, operand) {

  var result;
  var op1 = Number(subtotal);
  var op2 = Number(operand);

  switch (operation) {
    case 'add':
      result = op1 + op2;
      break;
    case 'sub':
      result = op1 - op2;
      break;
    case 'div':
      result = op1 / op2;
      break;
    case 'mult':
      result = op1 * op2;
      break;
    case 'pow':
      result = Math.pow(op1, op2);
      break;
    case 'sqrt':
      result = Math.sqrt(op1);
      break;
    default:
      invalidInputs()
  }

  return result;

};//END calculator


//printHelp
function printHelp(){
  console.log('Welcome to Gregs calculator');
  console.log('============================')
  console.log('Type "q", "quit", or "exit" to exit program');
  console.log('Type "-v" or "--version" to print version #');
  console.log('============================')
  console.log('Use the following format to Calculate:');
  console.log('<operation><integar><integar>');
  console.log('============================')
  console.log('operations can be:');
  console.log('<add><sub><mult><div><pow><sqrt>')
  console.log('============================')
  console.log('operations can be chained like such:')
  console.log('<oper><int><int><oper><int>')
};

//invalid inputs
function invalidInputs(){
  console.log("Your inputs are bad and you should feel bad")
  console.log("Type -h for help")
};
