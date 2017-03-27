var fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8')

process.stdin.on('data', function(str){
	var str = str.trim();
  fs.writeFile('./data/input.txt', str, 'utf8', function(err) {
      // if(err) {
      //   console.log(err);
      // }
      console.log('file written!');
    });


	// if(str === '\\q') {

    console.log("Lates!");
		process.exit();
	//}
});

