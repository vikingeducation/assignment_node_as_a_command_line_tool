const calc = require('./modules/calc-module');
const getValue = require('./modules/calc-loop');
let args = process.argv.slice(2);
let command = args.shift();
let interactive = false;
let debug = false;

switch (command) {
  case '--debug':
  case '-d':
    command = args.shift();
    debug = true;
    break;
  case '--help':
  case '-h':
    console.log(calc._helpString);
    process.exit();
    break;
  case '--version':
  case '-v':
    console.log(calc._version);
    process.exit();
    break;
  case '--interactive':
  case '-i':
    interactive = true;
    break;
}

if (interactive) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', function(data) {
    if (data === 'done\n') {
      console.log('Goodbye! :)');
      process.stdin.pause();
    } else {
      let args = data.trim().split(' ');
      let command = args.shift();
      let total = +args.shift();
      getValue(command, total, args);
    }
  });
} else {
  if (args[args.length - 1] === '--help' || args[args.length - 1] === '-h') {
    helpVar = command + 'Help';
    console.log(calc[helpVar]);
    process.exit();
  }

  let total = +args.shift();
  getValue(command, total, args, debug);
}
