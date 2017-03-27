process.stdin.resume();
process.stdin.setEncoding('utf8');

var Calculator = require('./lib/Calculator');
var calculator = new Calculator;



process.stdin.on('data', function(str) {
  str = str.trim();
  if (calculatorHandlers.handleCalcInfo(str)) {
    process.exit();
  } else {
    var commands = []
  // handle str if it's not -v or -h
  // str looks something like "add 5 5"
    commands.push({
      str.split(' ')[0]: [str.split(' ')[1], str.split(' ')[2]]
    })


  }

  // push the commands and arguments to `commands` and then do something with them
   commands = [
   {'add': [1,2]},
   {'add': [3,4]}
   ]



  // if (str === 'q' || str === 'quit') {
  //   console.log('Goodbye');
  //   process.exit();
  // } else {
  //   callFunction(str)
  // }
})

var calculatorHandlers = {
  // refactor the returns here
  handleCalcInfo: function(str){
    var version = /\-v|\-\-version/;
    var help = /\-h|\-\-help/;
    if (str.match(version)){
      console.log("Version: " + calculator.version);
      return true
    } else if (str.match(help)){
      console.log("Help: " + calculator.help)
      return true
    } else {
      return false;
    }
  },

  add: function(obj){
    return obj.add[0] + obj.add[1];
  },

  subtract: function(obj){
    return obj.sub[0] - obj.sub[1];
  },

  div: function(obj){
    return obj.div[0] / obj.div[1];
  },

  mult: function(obj){
    return obj.mult[0] * obj.add[1];
  }
}


