//How will you map user input to JavaScript functions?
//  with stdin listener

//How will you properly pass arguments to subcommands to the appropriate function?
//

//How will you enable subcommand chaining?

//How will you allow options like -h and -v and their aliases --help and --version to output the correct information?
//


console.log("Started process");
process.stdin.resume();
process.stdin.setEncoding('utf8');

var cp = require('child_process');
var pkgjson = require('./package.json')
var argVals = process.argv.splice(2)


var inputFormat = function(input) {
  var input = input.split(" ");
  // var command = input[0];
  // var args = input.slice(1);
  // console.log(input);
  return input;
}

var calcFuncs = {
  add: function(a, b) {
    if (b === undefined) {
      return parseInt(a) + //
    } else {
      return parseInt(a) + parseInt(currVal)
    }
  },

  sub: function(a, b) {
    if (b === undefined) {
      return parseInt(a) - //
    } else {
      return parseInt(a) - parseInt(currVal)
    }
  },

  mult: function(a, b) {
    if (b === undefined) {
      return parseInt(a) * //
    } else {
      return parseInt(a) * parseInt(currVal)
    }
  },

  div: function(a, b) {
    if (b === undefined) {
      return parseInt(a) / //
    } else {
      return parseInt(a) / parseInt(currVal)
    }
  },

};

result = calcFuncs[argVals[0]](argVals[1], argVals[2]);

  if (!argVals[3] === undefined) {
    for (i=3; i<argVals; i++) {
      for (k=(i+1); k<=argVals; k++) {
        calcFuncs[argVals[i](argVals[k])
      }
    }
  }
  









    // var input = str.split(" ");
    // var cmd = cp.spawn(input[0], input.slice(1,input.length));

    // cmd.stdout.on('data', function(data) {
    //   console.log(`${data}`);
    // })

    // cmd.stderr.on('data', function(data) {
    //   console.error(`Error: ${data}`);
    // })

// process.stdin.on('data', function(str) {
//   str = str.trim();

//   // call object keys if there are a lot of if/elses
//   if (str === 'q' || str === 'quit') {
//     process.exit();
//   } else if (str === '-v' || str === '--version') {
//     console.log(pkgjson.version)
//   } else if (str === '-h' || str === '--help') {
//     console.log(pkgjson.help)
//   }

//   else {
//     var input = inputFormat(str)
//     console.log(input)
//     if (input[0] === 'add') {
//       console.log(add(input[1], input[2]));

//     }
//   }
// });
