//get non path arguments into an array
let argArray = process.argv.slice(2, (process.argv.length));
let result = 0;
let dummy = 0;
let debug = 0;
let selfFunction = function(argArray){
if (argArray.length != 0) {
//check the first statement(only one where version/etc are valid), also takes different # of params
  switch (argArray[0]) {
    case 'add':
      result += (parseInt(argArray[1]) + parseInt(argArray[2]));
      argArray.shift();
      argArray.shift();
      argArray.shift();
      if(debug){
        console.log(argArray[0], argArray[1], argArray[2], + " => " +result);
      }
      break;
    case 'sub':
      result += (parseInt(argArray[1]) - parseInt(argArray[2]));
      argArray.shift();
      argArray.shift();
      argArray.shift();
      if(debug){
        console.log(argArray[0], argArray[1], argArray[2]+ " => " + result);
      }
      break;
    case 'div':
      result += (parseInt(argArray[1]) / parseInt(argArray[2]));
      argArray.shift();
      argArray.shift();
      argArray.shift();
      if(debug){
        console.log(argArray[0], argArray[1], argArray[2]+ " => " + result);
      }
      break;
    case 'mult':
      result += (parseInt(argArray[1]) * parseInt(argArray[2]));
      argArray.shift();
      argArray.shift();
      argArray.shift();
      if(debug){
        console.log(argArray[0], argArray[1], argArray[2]+ " => " + result);
      }
      break;
      case '--debug':
        debug = 1;
        selfFunction(argArray.shift());
        break;
    case'-v':
      console.log("1.0.0")
      dummy = 1;
	    break;
    case '--version':
      console.log("1.0.0")
      dummy = 1;
	    break;
    case '-h':
      console.log("Valid Function => (add, sub, div, multiply). First parameter takes 2 arguments all further take one. Example => ${func} {int} {int} {$funct} {int} ...");
      dummy = 1;
	    break;
    case '--help':
      console.log("Valid Function => (add, sub, div, multiply). First parameter takes 2 arguments all further take one. Example => ${func} {int} {int} {$funct} {int} ...");
      dummy = 1;
	    break;
    default:
      console.log("Please enter a valid function (add, sub, mult, div).");
      dummy = 1;
  }
}
}
//check next statements, applies them to results
while (argArray.length != 0 && dummy === 0) {
  switch (argArray[0]) {
    case 'add':
      result += + parseInt(argArray[1]);
      argArray.shift();
      argArray.shift();
      if(debug){
        console.log(argArray[0], result, + " => " +argArray[1]);
      }
      break;
    case 'sub':
      result -= parseInt(argArray[1]);
      argArray.shift();
      argArray.shift();
      if(debug){
        console.log(argArray[0], result, + " => " +argArray[1]);
      }
      break;
    case 'div':
      result /= parseInt(argArray[1]);
      argArray.shift();
      argArray.shift();
      if(debug){
        console.log(argArray[0], result, + " => " +argArray[1]);
      }
      break;
    case 'mult':
      result *= parseInt(argArray[1]);
      argArray.shift();
      argArray.shift();
      if(debug){
        console.log(argArray[0], result, + " => " +argArray[1]);
      }
      break;
    default:
      console.log("Please enter a valid function (add, sub, mult, div).");
      dummy = 1;
  }
}
selfFunction(argArray);
console.log(result);
