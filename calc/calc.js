var pkgjson = require('./package.json')
var argVals = process.argv.splice(2);

var info = {
  "-v": pkgjson.version,
  "--version": pkgjson.version,
  "-h": pkgjson.help,
  "--help": pkgjson.help
}

//Global result value
var currVal = 0;

var calcLogic = function () {
  if (argVals.length === 1) {
    console.log(info[argVals[0]])
  } else {
    result = calcFuncs[argVals[0]](argVals[1], argVals[2]);
    runCalc()
  }
}

var runCalc = function() {
  for(i=3; i<argVals.length; i+=2) {
    calcFuncs[argVals[i]](argVals[i+1])
  }
  console.log(currVal)
}

var calcFuncs = {
  add: function(a, b) {
    doMath('add', a, b);
  },

  sub: function(a, b) {
    doMath('sub', a, b);
  },

  mult: function(a, b) {
    doMath('mult', a, b);
  },

  div: function(a, b) {
    doMath('div', a, b);
  }
};

var doMath = function (action, a, b) {
  var result;
  var firstVal = parseFloat(a);
  var secondVal = parseFloat(b);

  if (b === undefined) {
    firstVal = currVal;
    secondVal = parseFloat(a);
  }

  if (action === 'add') {
    currVal = firstVal + secondVal;
  }
  else if (action === 'sub') {
    currVal = firstVal - secondVal;
  }
  else if (action === 'mult') {
    currVal = firstVal * secondVal;
  }
  else if (action === 'div') {
    currVal = firstVal / secondVal;
  }
}

//Run the program
calcLogic();
