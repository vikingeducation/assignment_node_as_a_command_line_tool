const cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  data = data.trim();

  if (data === 'q' || data === 'quit') {
    process.exit();
  } else {
    var dataArr = data.split(" ");

    var firstItem = dataArr.splice(0, 1);

    var cmd = cp.spawn(`${ firstItem }`, dataArr);

    cmd.on('error', (err) => {
      console.error(`${ err.stack }`);
    });

    cmd.stdout.on('data', (data) => {
      console.log(`Data: ${ data }`);
    });

    cmd.stderr.on('data', (data) => {
      console.error(`STDERR: ${ data }`);
    });
  }
});
