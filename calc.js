// use process.argv
//loop
// check for keywords like add/sub/div/mult
// depending keyword, carry out operations for all the numbers following until we hit a string


function calcNormal() {
  let sum = 0;
  let func = "add";
  let arg = process.argv;
  let debugMode = 0;
  let debugOutput = "";
  if (arg[2] === '--debug' || arg[2] === '-d') {
    debugMode = 1;
  }
  for (let i = 2; i < arg.length; i++) {
    if (!(isNaN(arg[i]))) {
      let num = parseInt(arg[i]);
      switch (func) {
        case "add":
        	debugOutput += ` ${arg[i]}`;
        	// console.log(debugOutput)
          sum = (sum + num);
          break;
        case "sub":
        	debugOutput += ` ${arg[i]}`;
          sum = (sum - num);
          break;
        case "mult":
        	debugOutput += ` ${arg[i]}`;
          sum = (sum * num);
          break;
        case "div":
        	debugOutput += ` ${arg[i]}`;
          sum /= num;
          break;
      }
    } else if (typeof arg[i] === "string") {
      if (arg[i] === '-h' || arg[i] === '--help') {
        return 'To use the calculate, type: node calc.js <operator> <numbers>. These operations are chainable.';
      }
      if (arg[i] === '-v' || arg[i] === '--version') {
        return '0.0.1';
      } else {
        switch (arg[i]) {
          case "sqrt":
            var oldSum = sum;
            if (isNaN(arg[i+1])) {
              sum = Math.sqrt(sum);
            } else {
              return("error!");
            }
            if (debugMode === 1) {
            	debugOutput += ` = ${oldSum}`;
              console.log(debugOutput);
              debugOutput = `${oldSum} sqrt`;
            }
            break;
          case "pow":
            if ((!(isNaN(arg[i+1]))) && (!(isNaN(arg[i+2])))) {
              if ((!(isNaN(arg[i+3])))) {
                return("error!");
              }
              var oldSum = sum;
              sum += Math.pow(arg[i+1], arg[i+2]);
              i += 2;
            }
            if (debugMode === 1) {
            	debugOutput += ` = ${oldSum}`;
              console.log(debugOutput);
              debugOutput = `${oldSum} + pow ${arg[i-1]} ${arg[i]}`;
            }
            break;
          case "add":
            func = "add";
            if (debugMode === 1) {
            	debugOutput += ` = ${sum}`;
              console.log(debugOutput);
              debugOutput = `${sum} ` + func;
            }
            break;
          case "sub":
            func = "sub";
            if (debugMode === 1) {
            	debugOutput += ` = ${sum}`;
              console.log(debugOutput);
              debugOutput = `${sum} ` + func;
            }
            break;
          case "div":
            if (i === 2) {
              sum = arg[3];
              i++;
            }
            func = "div";
            if (debugMode === 1) {
            	debugOutput += ` = ${sum}`;
              console.log(debugOutput);
              debugOutput = `${sum} ` + func;
            }
            break;
          case "mult":
            if (i === 2) {
              sum = 1;
            }
            func = "mult";
            if (debugMode === 1) {
            	debugOutput += ` = ${sum}`;
              console.log(debugOutput);
              debugOutput = `${sum} ` + func;
            }
            break;
        }
      }
    }
    if (i === arg.length-1 && debugMode === 1) {
      debugOutput += ` = ${sum}`;
      console.log(debugOutput);
    }
  }
  return (sum);
}

//interactive function not finished
function calcInteractive(theSum) {
  let sum = theSum;
  let func = "add";
  let arg = process.stdin.trim().split(' ');
  for (let i = 0; i < arg.length; i++) {
    if (!(isNaN(arg[i]))) {
      let num = parseInt(arg[i]);
      switch (func) {
        case "add":
          sum = (sum + num);
          break;
        case "sub":
          sum = (sum - num);
          break;
        case "mult":
          sum = (sum * num);
          break;
        case "div":
          sum = (sum / num);
          break;
      }
    } else if (typeof arg[i] === "string") {
      if (arg[i] === '-h' || arg[i] === '--help') {
        return 'To use the calculate, type: node calc.js <operator> <numbers>. These operations are chainable.';
      }
      if (arg[i] === '-v' || arg[i] === '--version') {
        return '0.0.1';
      } else {
        switch (arg[i]) {
          case "sqrt":
            var oldSum = sum;
            if (isNaN(arg[i+1])) {
              sum = Math.sqrt(sum);
            } else {
              return("error!");
            }
            break;
          case "pow":
            if ((!(isNaN(arg[i+1]))) && (!(isNaN(arg[i+2])))) {
              if ((!(isNaN(arg[i+3])))) {
                return("error!");
              }
              var oldSum = sum;
              sum += Math.pow(arg[i+1], arg[i+2]);
              i += 2;
            }
            break;
          case "add":
            func = "add";
            break;
          case "sub":
            func = "sub";
            break;
          case "div":
            if (i === 0) {
              sum = arg[1];
              i++;
            }
            func = "div";
            break;
          case "mult":
            if (i === 0) {
              sum = 1;
            }
            func = "mult";
            break;
        }
      }
    }
  }
  return (sum);
}


//interactive mode = not finished...

//process.stdin.on('data', (data) => {
//  if (process.argv[2] === "-i")  {
//    var theSum = 0;
//    console.log(calcInteractive(theSum));
//  }
//});

console.log(calcNormal());
