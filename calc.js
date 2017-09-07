
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
      console.log('invalid flag, type "-h for help"')
  }

};//END mapFlagInput

var result;

//parse inputs function
function mapCalcInput(dataArray) {

  //array to store calculator data and reset everytime:
  var operation = [];
  var integers = [];

  //the first value should be an operator
  operation = dataArray.shift()

  //check the next values for nums
  //push those nums into integers then stop
  //and make it into a Number()
  while (!isNaN(dataArray[0])){
	  integers.push(Number(dataArray.shift()))
  }

  result = calculator(operation, integers, dataArray);
  console.log(result);

  /*CHECK inputs if good then feed into calculator
  if ((!integers.some(isNaN)) && (operation.some(isNaN))) {

  } else {
    console.log("Your inputss are bad, and you should feel bad. Type -h")
  }*/

};//END mapCalcInput


//calculator
//the dataArray fed into here should be whats left over to calc after this
function calculator(operation, integers, dataArray) {

  switch (operation) {
    case 'add':
      return integers[0] + integers[1];
      break;
    case 'sub':
      return integers[0] - integers[1];
      break;
    case 'div':
      return integers[0] / integers[1];
      break;
    case 'mult':
      return integers[0] * integers[1];
      break;
    default:
      console.log("invalid inputs. type -h for help")
  }

}
  //switch

//printHelp

//invalid inputs
