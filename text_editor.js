process.stdin.setEncoding('utf8');
var fs = require('fs');


process.stdin.on('data', function(data){
	data = data.trim();
	if(data == "q" || data == "Q" || data == "quit"){
		console.log('quitting');
		process.exit();
	}
	else{
		fs.appendFile("data/input.txt", `${data}\n`, function(err){
			if(err) throw err;
			console.log(`Writing ${data} to file`);
		})
	}
});



