var calc_helper = {
  add: function(number1, number2) {
    return parseInt(number1) + parseInt(number2);
  },

  sub: function(number1, number2) {
    return parseInt(number1) - parseInt(number2);
  },

  div: function(number1, number2) {
    return parseInt(number1) / parseInt(number2);
  },

  mult: function(number1, number2) {
    return parseInt(number1) * parseInt(number2);
  },

  VERSION_NUMBER:'1.0.0',
  HELP_TEXT: 'Input a '
}

module.exports = calc_helper;
