var fs = require('fs');
var cp = require('child_process');


process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(str) {
  str = str.trim();
  if (str === 'q' || str === 'quit') {
    console.log('Goodbye.');
    process.stdin.pause();
  } else {
    var cmd = cp.spawn('echo', [str]);
    cmd.stdout.on('data', (data) => {
      console.log(`Your input was: "${ data }"`);
    });

    cmd.stderr.on('data', (data) => {
      console.error(`STDERR: ${ data }`);
    });

  }
});

process.on('SIGINT', function() {
  console.log('Goodbye.');
  process.exit();
});




