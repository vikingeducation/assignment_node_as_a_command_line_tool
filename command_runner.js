var cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
  var input = input.trim();

  if (input === 'q') {
    console.log('quitting!');
    process.exit();
  } else {
      var cmd = cp.spawn('echo', [input] );
      cmd.stdout.on('data', (data) => {
      console.log(data);
    });
  }
});

