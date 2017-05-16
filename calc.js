var ch = require('./calc_helper');

var args = process.argv;
if (args.length > 2) {
  let tally = 0;
  for (var index=2; index<args.length; index++) {
    var arg = args[index];
    if (arg.startsWith('-')) {
    } else if (!arg.match(/\d/)) {
      if (tally > 0) {
        var result = ch.performCalculation(arg, tally, args[index+1]);
        tally = result;
      } else {
        var result = ch.performCalculation(arg, args[index+1], args[index+2]);
        tally += result;
      }
    }
  }
}
