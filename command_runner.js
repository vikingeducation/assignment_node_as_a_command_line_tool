//
// some notes: 
// 		'grep' will emit data stderr 
// 		'ls -l' will emit data stdout 
//		'dsfs' will emit 'error'
// 		all will emit 'close'
//		\q will quit
// highlights: 
//		useful string manipulation functions (trim, split)
//
// DC, 2017-10-03
//

const fs = require('fs');
const spawn = require('child_process').spawn;

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', userInput => {
	//trim() removes whitespace from both sides
	//eg: "       Hello  World!        " --> "Hello  World!"
	var userInput = userInput.trim();

	if (userInput === '\\q') {
		//quit condition
		process.exit();
	} else {
		//parse userInput
		//removes whitespace from the middle
		//eg, "hello    my borthers    ;" --> ["hello", "my", "borthers", ";"]
		let inputSplit = userInput.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
		let command = inputSplit[0];
		let args = inputSplit.slice(1, userInput.length); // args is an array

		/*
		console.log(inputSplit);
		console.log(command);
		console.log(args);
		*/

		//spawn child processes
		let myCommand = spawn(command, args);
		//console.log(myCommand);

		//handle events
		myCommand.on('error', err => {
			console.error(`error: ${err.stack}`);
		});

		myCommand.stdout.on('data', data => {
			console.log(`stdout: ${data}`);
		});

		myCommand.stderr.on('data', data => {
			console.log(`stderr: ${data}`);
		});

		myCommand.on('close', code => {
			console.log(`child process exited with code ${code}`);
		});
	};
});
