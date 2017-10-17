var fs = require("fs");
var cp = require("child_process");

process.stdin.resume();
process.stdin.setEncoding("utf8");

// If the STDIN listener receives data, pass that data as parameters to a new child process
process.stdin.on("data", data => {
  data = data.toString().trim();
  if (data === "q" || data === "quit") {
    process.exit();
  }
  var spawnCommands = data.split(" ");
  var spawnRoot = spawnCommands.shift();
  var cmd = cp.spawn(spawnRoot, spawnCommands);

  // Print results from error, stderr, and stdout
  cmd.on("error", error => {
    console.error(`${error.stack}`);
  });

  cmd.stderr.on("data", data => {
    console.error(`Child Process STDERR:
${data}`);
  });

  cmd.stdout.on("data", data => {
    console.log(`Child process result from STDOUT:
${data}`);
  });
});
