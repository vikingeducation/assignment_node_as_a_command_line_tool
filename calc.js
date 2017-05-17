var ch = require('./calc_helper');

var args = process.argv;

if (args.length > 2) {
  let tally;

  if (args[2].startsWith('-')) {
    console.log(ch.getStaticText(args[2]));
  }

  var index = 2;
  var parsing = true;

  while (parsing) {
    var op = args[index];
    if (tally) {
      tally = ch.performCalculation(op, tally, args[index+1]);
      index += 2;
    } else {
      tally = ch.performCalculation(op, args[index+1], args[index+2]);
      index += 3;
    }
    if (index >= args.length) {
      parsing = false;
    }
  }
  console.log(tally);
}
