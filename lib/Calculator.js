
class Calculator {
  constructor(){
    this.version = '0.0.0.0.1';
    this.help = {
      default: "This is the help message. We can define it later.",
      add:  "Usage: node calc.js add 1 2",
      sub:  "Usage: node calc.js sub 1 2",
      mult:  "Usage: node calc.js mult 1 2",
      div:  "Usage: node calc.js div 1 2",
      pow:  "Usage: node calc.js pow 1 2",
      sqrt:  "Usage: node calc.js sqrt 1 2",
    }
  }
}

module.exports = Calculator;