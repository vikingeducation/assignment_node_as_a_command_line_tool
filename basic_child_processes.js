var cp = require("child_process");

// Child process executing ps aux with exec
// Exec processes results from child process with callback
/*
var cmd = cp.exec("ps aux", (err, stdout, stderr) => {
  if (err) {
    console.error(err.stack);
    console.error(`Error code: ${err.code}`);
    console.error(`Signnal received: ${err.signal}`);
  }

  if (stderr) {
    console.error(`Child Process STDERR:
${stderr}`);
  }

  console.log(`Child Process STDOUT:
${stdout}`);
});
*/

// Child process executing ps aux with spawn
// Spawn processes results from child process with event listeners
var cmd = cp.spawn("ps", ["aux"]);

cmd.on("error", err => {
  console.error(`${err.stack}`);
});

cmd.stderr.on("data", data => {
  console.error(`Child Process STDERR:
${data}`);
});

cmd.stdout.on("data", data => {
  console.log(`Child Process STDOUT: 
${data}`);
});
