module.exports = {
  checkForValidFlag: (arg) => {
    var flagArr = ['-v', '--version', '-h', '--help'];

    if (flagArr.includes(arg)) {
      return true;
    } else {
      return false;
    }
  },

  checkForValidOperation: (arg) => {
    var opArr = ['add', 'sub', 'mult', 'div'];

    if (opArr.includes(arg)) {
      return true;
    } else {
      return false;
    }
  },

  calc: (operation, num1, num2) => {
    switch(operation) {
      case 'add':
        return num1 + num2;
      case 'sub':
        return num1 - num2;
      case 'mult':
        return num1 * num2;
      case 'div':
        return num1 / num2;
    }
  }
};
