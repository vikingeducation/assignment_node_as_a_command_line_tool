var ch = require('./calc_helper');

var args = process.argv;
if (args.length > 2) {
  args.forEach( (arg, index, args) => {
    console.log(arg);
    if (arg === '-v' || arg === '--version') {
      console.log(ch.VERSION_NUMBER);
    } else if (arg === '-h' || arg === '--help') {
      console.log (ch.HELP_TEXT);
    }
  });
}
