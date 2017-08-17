process.stdin.setEncoding('utf8');
var fs = require('fs');
var child_process = require('child_process');

process.stdin.on('data', (data) => {
	data = data.trim();
	if(data == "q" || data == "Q" || data == "quit"){
		console.log('Process is quitting...');
		process.exit();
	}
	else{
		var args = [];

		data = data.split(" ");
		data.forEach((val, i) => {
			args.push(val)
				
		})
		create_cp(args);
	}
});

function create_cp(args){
	var joined = args.join(" ").trim();
	var ps = child_process.exec(joined);
	ps.stdout.on('data', (data) => {
		console.log(data.trim());
	});
}