const cp = require('child_process');

process.stdin.resume();

process.stdin.setEncoding('utf8');

process.stdin.on('data', (str) => {
  str = str.trim();

  if (str == "q" || str === "quit") {
    console.log("goodbye");
    process.exit();
  }
  else {
    var cmd = cp.spawn('echo', [str]);
    cmd.stdout.on ('data', (data) => {
      console.log(`Data: ${ data }`);
    });
    cmd.stderr.on('data', (data) => {
      console.error(`Error: ${ data }`);
    });
  }
});
