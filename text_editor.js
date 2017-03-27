

process.stdin.resume();
process.stdin.setEncoding('utf8')

process.stdin.on('data', function(str){
	str = str.trim();
	if(str === '\\q') {
		console.log("Lates!");
		process.stdout.write(str);
		process.exit();
	}
})