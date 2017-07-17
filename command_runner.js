cp = require('child_process');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', data => {
  data = data.trim();
  if (data === 'q' || data === 'quit') {
    console.log('Goodbye! :)');
    process.stdin.pause();
  } else {
    let args = data.toString().trim().split(' ');
    console.log(args);
    writeStuff(args);
  }
});

function writeStuff(args) {
  var ps = cp.spawn(args[0], args.slice(1));

  ps.stdout.on('data', function(data) {
    console.log(data.toString());
  });

  ps.stderr.on('data', function(err) {
    console.log(err.toString());
  });

  ps.on('error', function(err) {
    console.log(err.stack);
  });

  ps.on('close', function(code) {
    console.log(code);
  });
}
