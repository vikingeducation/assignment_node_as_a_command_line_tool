//get non path arguments into an array
let argArray = process.argv.slice(2, (process.argv.length));
let result = 0;
let dummy = 0;
let dummy2 = 0;
let debug = 0;
let selfFunction = function(argArray){


  if (argArray.length != 0 && dummy2 === 0) {
  //check the first statement(only one where version/etc are valid), also takes different # of params
    switch (argArray[0]) {
      case 'add':
        if (argArray[1] === '-h') {
          console.log("Here's some information about addition.")
          dummy = 1;
          break;
        }
        result += (parseInt(argArray[1]) + parseInt(argArray[2]));
        if(debug){
          console.log(`${argArray[0]} ${argArray[1]} ${argArray[2]} +  => ${result}`);
        }
        argArray.shift();
        argArray.shift();
        argArray.shift();
        break;
      case 'sub':
        if (argArray[1] === '-h') {
          console.log("Here's some information about subtraction.")
          dummy = 1;
          break;
        }
        result += (parseInt(argArray[1]) - parseInt(argArray[2]));
        if(debug){
          console.log(`${argArray[0]} ${argArray[1]} ${argArray[2]} +  => ${result}`);
        }
        argArray.shift();
        argArray.shift();
        argArray.shift();
        break;
      case 'div':
        if (argArray[1] === '-h') {
          console.log("Here's some information about division.")
          dummy = 1;
          break;
        }
        result += (parseInt(argArray[1]) / parseInt(argArray[2]));
        if(debug){
          console.log(`${argArray[0]} ${argArray[1]} ${argArray[2]} +  => ${result}`);
        }
        argArray.shift();
        argArray.shift();
        argArray.shift();
        break;
      case 'mult':
        if (argArray[1] === '-h') {
          console.log("Here's some information about multiplication.")
          dummy = 1;
          break;
        }
        result += (parseInt(argArray[1]) * parseInt(argArray[2]));
        if(debug){
          console.log(`${argArray[0]} ${argArray[1]} ${argArray[2]} +  => ${result}`);
        }
        argArray.shift();
        argArray.shift();
        argArray.shift();
        break;
      case 'pow':
        if (argArray[1] === '-h') {
          console.log("Here's some information about exponentiation.")
          dummy = 1;
          break;
        }
        result = result + ( Math.pow(parseInt(argArray[1]), parseInt(argArray[2])) );
        if(debug){
          console.log(`${argArray[0]} ${argArray[1]} ${argArray[2]} +  => ${result}`);
        }
        argArray.shift();
        argArray.shift();
        argArray.shift();
        break;
      case 'sqrt':
        if (argArray[1] === '-h') {
          console.log("Here's some information about square roots.")
          dummy = 1;
          break;
        }
        result = Math.sqrt(argArray[1])
        if(debug){
          console.log(`${argArray[0]} ${argArray[1]}  => ${result}`);
        }
        argArray.shift();
        argArray.shift();
        break;
      case '--debug':
          debug = 1;
          argArray.shift();
          selfFunction(argArray);
          break;
      case '-i':
        dummy = 1;
        process.stdin.resume();
        process.stdin.setEncoding('utf8');

        process.stdin.on('data', str => {
          str = str.trim();
          let int_result;
          argArray = str.split(' ')

          int_result = selfFunction(str.split(' '));
          console.log(selfFunction(str.split(' ')))
          dummy = 0;
          dummy2 = 1;
          console.log('DEBUG')
          console.log(argArray)
          console.log(result)
          console.log(dummy)
          console.log(dummy2)

          console.log(result)
        });

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

//check next statements, applies them to results
while (argArray.length != 0 && dummy === 0) {
  switch (argArray[0]) {
    case 'add':
      result += + parseInt(argArray[1]);
      if(debug){
        console.log(`${argArray[0]} ${result}  =>  ${argArray[1]}`);
      }
      argArray.shift();
      argArray.shift();
      break;
    case 'sub':
      result -= parseInt(argArray[1]);
      if(debug){
        console.log(`${argArray[0]} ${result}  =>  ${argArray[1]}`);
      }
      argArray.shift();
      argArray.shift();
      break;
    case 'div':
      result /= parseInt(argArray[1]);
      if(debug){
        console.log(`${argArray[0]} ${result}  =>  ${argArray[1]}`);
      }
      argArray.shift();
      argArray.shift();
      break;
    case 'mult':
      result *= parseInt(argArray[1]);
      if(debug){
        console.log(`${argArray[0]} ${result}  =>  ${argArray[1]}`);
      }
      argArray.shift();
      argArray.shift();
      break;
    case 'pow':
        result = Math.pow(result, parseInt(argArray[1]));
        if(debug){
          console.log(`${argArray[0]} ${result}  =>  ${argArray[1]}`);
        }
        argArray.shift();
        argArray.shift();
        break;
    case 'sqrt':
        if(debug){
          console.log(`${argArray[0]} ${result}  =>  ${Math.sqrt(result)}`);
        }
        result = Math.sqrt(result);
        argArray.shift();
        break;
    default:
      console.log("Please enter a valid function (add, sub, mult, div).");
      dummy = 1;
  }
}

  if (!dummy) {console.log(`${result}`)};
}
selfFunction(argArray);
