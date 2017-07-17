var fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("utf8");

var userIn = "";

process.stdin.on('data', (data) => {
  data = data.trim();
  if(data !== '\\q') {
    userIn += " " + data;
  }
  if (data === '\\q') {
    console.log(data);
    fs.writeFile("./data/input.txt", userIn, (err) => {
      if(err) {
        console.error(err);
      }
      else {
        console.log("File was written! Yippee!");
      }
    });
    process.stdin.pause();
  }
  else {
  console.log(data);
  }
})
