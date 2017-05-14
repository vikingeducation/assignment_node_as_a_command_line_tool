var cp = require('child_process');
process.stdin.resume();

process.stdin.setEncoding('utf8');

process.stdin.on('data', function(str) {
  str = str.trim();
  var args = str.split(" ");

  if (str === 'q' || str === 'quit') {
    console.log("Exiting");
    process.exit();
  } else {

  var cmd = cp.spawn("echo", args);
  console.log(cmd.pid);

  cmd.on('error', (err) => {
    console.error(`${err.stack}`);
  });

  cmd.stdout.on('data', (data) => {
    console.log(`${data}`);
  });

  cmd.stderr.on('data', (data) => {
    console.error(`${data}`);
  });
}
});
