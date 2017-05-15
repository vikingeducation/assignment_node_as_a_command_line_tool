var ch = require('./calc_helper');

var args = process.argv;
if (args.length > 2) {
  let tally = 0;
  args.forEach( (arg, index, args) => {
    // console.log(arg);
    if (arg.startsWith('-')) {
      console.log(ch.getStaticText(arg));
    } else {
      var result = ch.performCalculation(arg, args[index+1], args[index+2]);
      tally += result;
    }
    // } else if (arg === 'add') {
    //   console.log(ch.add( args[index+1], args[index+2]));
    // } else if (arg === 'sub') {
    //   console.log(ch.sub(args[index+1], args[index+2]));
    // } else if (arg === 'div') {
    //   console.log(ch.div(args[index+1], args[index+2]));
    // } else if (arg === 'mult') {
    //   console.log(ch.mult(args[index+1], args[index+2]));
    // }
  });
  console.log(tally);
}
