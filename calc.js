var ch = require('./calc_helper');

var args = process.argv;
if (args.length > 2) {
  args.forEach( (arg, index, args) => {
    // console.log(arg);
    if (arg === '-v' || arg === '--version') {
      console.log(ch.VERSION_NUMBER);
    } else if (arg === '-h' || arg === '--help') {
      console.log (ch.HELP_TEXT);
    } else if (arg === 'add') {
      console.log(ch.add( args[index+1], args[index+2]));
    } else if (arg === 'sub') {
      console.log(ch.sub(args[index+1], args[index+2]));
    } else if (arg === 'div') {
      console.log(ch.div(args[index+1], args[index+2]));
    } else if (arg === 'mult') {
      console.log(ch.mult(args[index+1], args[index+2]));
    }
  });
}
