var fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8')
var myArr = [];
process.stdin.on('data', function(str){
  myArr.push(str.trim());

	if(str.trim() === '\\q') {
    fs.writeFile('./data/input.txt', myArr.slice(0, -1).join(" "), 'utf8', function(err) {
       if(err) {
         console.log(err);
      }
      console.log("Lates!");
      process.exit();
    });
	}
});

