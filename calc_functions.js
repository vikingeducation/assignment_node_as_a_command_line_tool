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
  }
};
