const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", function(str) {
  str = str.trim();

  if (str == "\\q" || str === "quit") {
    console.log("goodbye");
    process.exit();
  } else {
    fs.appendFile("./data/input.txt", str, function(err) {
      if (err) {
        console.log(err);
      }
      console.log("file was appended");
    });
  }
});
