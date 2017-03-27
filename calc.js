process.stdin.resume();
process.stdin.setEncoding('utf8');

var commands = []

process.stdin.on('data', function(str) {
  str = str.trim();
  if (str === 'q' || str === 'quit') {
    console.log('Goodbye');
    process.exit();
  } else {
    callFunction(str)
  }
}

