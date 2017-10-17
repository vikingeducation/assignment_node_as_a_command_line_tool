var fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", function(input) {
  input = input.trim();
  if (input === "\\q") {
    console.log("Your text has been saved.");
    process.exit();
  } else {
    fs.appendFile("./data/input.txt", input, err => {
      if (err) throw err;
    });
  }
});
