var calc_helper = {

  performCalculation: function(operation, number1, number2) {
    var result = 0;
    if (operation === 'add') {
      result = this.add(parseInt(number1), parseInt(number2));
    } else if (operation === 'sub') {
      result = this.subtract(parseInt(number1), parseInt(number2));
    } else if (operation === 'div') {
      result = this.divide(parseInt(number1), parseInt(number2));
    } else if (operation === 'mult') {
      result = this.multiply(parseInt(number1), parseInt(number2));
    }
    return result;
  },

  add: function(number1, number2) {
    return (number1 + number2);
  },

  subtract: function(number1, number2) {
    return (number1 - number2);
  },

  divide: function(number1, number2) {
    return (number1 / number2);
  },

  multiply: function(number1, number2) {
    return (number1 * number2);
  },

  getStaticText: function(arg) {
    if (arg === '-v' || arg === '--version') {
      return this.VERSION_NUMBER;
    } else if (arg === '-h' || arg === '--help') {
      return this.HELP_TEXT;
    } else return this.INVALID_ARGUMENT;
  },

  VERSION_NUMBER:'1.0.0',
  HELP_TEXT: 'Input a ',
  INVALID_ARGUMENT: 'Invalid argument'
}

module.exports = calc_helper;
