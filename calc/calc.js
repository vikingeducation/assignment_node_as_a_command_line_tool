//How will you map user input to JavaScript functions?
//  with stdin listener

//How will you properly pass arguments to subcommands to the appropriate function?
//

//How will you enable subcommand chaining?

//How will you allow options like -h and -v and their aliases --help and --version to output the correct information?


process.stdin.resume();
process.stdin.setEncoding('utf8');

var cp = require('child_process');
var pkgjson = require('./package.json')
var argVals = process.argv.splice(2);
var currVal = 0;

var determineDebug = function() {
  if (argVals[0] === '-d' || argVals[0] === '--debug') {
    //argVals = process.argv.splice(1);
    console.log("determineDebug ran")
  }
}

var inputFormat = function(input) {
  var input = input.split(" ");
  return input;
}

var runCalc = function() {
  for(i=3; i<argVals.length; i+=2) {
    calcFuncs[argVals[i]](argVals[i+1])
  }
  console.log(currVal)
}

var info = {
  "-v": pkgjson.version,
  "--version": pkgjson.version,
  "-h": pkgjson.help,
  "--help": pkgjson.help
}

var calcFuncs = {

  add: function(a, b) {
    if (b === undefined) {
      currVal = parseInt(currVal) + parseInt(a)
      return currVal
    } else {
      currVal = parseInt(a) + parseInt(b)
      return currVal
    }
  },

  sub: function(a, b) {
    if (b === undefined) {
      currVal = parseInt(currVal) - parseInt(a)
      return currVal
    } else {
      currVal = parseInt(a) - parseInt(b)
      return currVal
    }
  },

  mult: function(a, b) {
    if (b === undefined) {
      currVal = parseInt(currVal) * parseInt(a)
      return currVal
    } else {
      currVal = parseInt(a) * parseInt(b)
      return currVal
    }
  },

  div: function(a, b) {
    if (b === undefined) {
      currVal = parseInt(currVal) / parseInt(a)
      return currVal
    } else {
      currVal = parseInt(a) / parseInt(b)
      return currVal
    }
  }

};

var calcLogic = function () {
  determineDebug();

  console.log(argVals);

  if (argVals.length === 1) {
    console.log(info[argVals[0]])
  } else {
    result = calcFuncs[argVals[0]](argVals[1], argVals[2]);
    runCalc()
  }
}

calcLogic();
