var Calculator = require('../lib/Calculator');
var calculator = new Calculator;

var calculatorHandlers = {
  handleCalcInfo: function(str, callback){
    var version = /\-v|\-\-version/;
    var help = /\-h|\-\-help/;
    if (str.match(version)){
      callback(calculator.version);
    } else if (str.match(help)){
      callback(calculator.help)
    }
  },

  add: function(a, b){
    return a + b;
  },

  sub: function(a, b){
    return a - b;
  },

  div: function(a, b){
    return a / b;
  },

  mult: function(a, b){
    return a * b;
  },

  pow: function(a, b){
    return Math.pow(a, b);
  },

  sqrt: function(a) {
    return Math.sqrt(a);
  },

  getCalculatorMethod: function(str, a, b){
    a = parseFloat(a);
    b = parseFloat(b);
    switch(str){
      case 'add':
        return(this.add(a,b))
        break;
      case 'sub':
        return(this.sub(a,b))
        break;
      case 'mult':
        return(this.mult(a,b))
        break;
      case 'div':
        return(this.div(a,b))
        break;
      case 'pow':
      return(this.pow(a,b));
      break;
      case 'sqrt':
      return(this.sqrt(a));
      break;
    }
  }
}

module.exports = calculatorHandlers;