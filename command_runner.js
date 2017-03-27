const cp = require("child_process");

process.stdin.resume();

process.stdin.setEncoding("utf8");

process.stdin.on("data", str => {
  str = str.trim();

  if (str == "q" || str === "quit") {
    console.log("goodbye");
    process.exit();
  } else {
    var parsedInput = parseInput(str);
    var cmd = cp.spawn(parsedInput.command, parsedInput.args);
    cmd.stdout.on("data", data => {
      console.log(`Data: ${data}`);
    });
    cmd.stderr.on("data", data => {
      console.error(`Error: ${data}`);
    });
  }
});

function parseInput(inputStr) {
  var array = inputStr.split(" ");
  var command = array[0];
  var args = array.slice(1);

  return {
    command,
    args
  };
}
