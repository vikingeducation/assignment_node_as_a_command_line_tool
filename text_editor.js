let fs = require('fs');

process.stdin.setEncoding('utf8');

process.stdin.on('data', function(str) {
  str = str.trim();
  if (str === 'q' || str === 'quit') {
    console.log('Goodbye.');
    process.stdin.pause();
  } else {

    //save to file
    fs.writeFile("./data/input.txt", str, function(err) {
	  if(err) {
	    return console.log(err);
	  }

	  console.log("The file was saved!");
	}); 
  }
});


process.on('SIGINT', done);


function done() {
  console.log('Goodbye.');
  process.exit();
}