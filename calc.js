//listen in on stdin for user input
//if quit condition, exit right away
//otherwise keep going
	//further parse through user input by getting rid of all whitespace
	//case input = -v or --version, print version to stdout
	//case input = -h or --help, print help to stdout
	//case input in (add, sub, mult,div) 
		//then perform calc
		//print out answer
//this whole thing loops due to listener on stdin for data event

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

		switch(command) {
		    case '-h': 
		    case '--help':
		        console.log('  Some helpful examples: ');
		        console.log('    Typing: add 16 4 2');
		        console.log('      will produce: 22');
		        console.log('    Typing: sub 16 4 2');
		        console.log('      will produce: 10');
		        console.log('    Typing: mult 16 4 2');
		        console.log('      will produce: 128');
		        console.log('    Typing: div 16 4 2');
		        console.log('      will produce: 2');
		        break;
		    case '-v':
		    case '--version':
		        console.log('  1.0.0');
		        break;
		    case 'add': 
				var total = parseFloat(0);
				for (let i=0; i<args.length; i++) {
					total += parseFloat(args[i]);
				}
				console.log(`  ${total}`);
				break;
		    case 'sub':
				var total = parseFloat(args[0]);
				for (let i=1; i<args.length; i++) {
					total -= parseFloat(args[i]);
				}
				console.log(`  ${total}`);
				break;
		    case 'mult':
				var total = parseFloat(args[0]);
				for (let i=1; i<args.length; i++) {
					total *= parseFloat(args[i]);
				}
				console.log(`  ${total}`);
				break;
		    case 'div':
				var total = parseFloat(args[0]);
				for (let i=1; i<args.length; i++) {
					total /= parseFloat(args[i]);
				}
				console.log(`  ${total}`);
				break;								
		    default:
		        console.log('Usage: command <num1> <num2> [num3 ... numN]');
		        console.log('Help: -h or --help');
		        console.log('Version: -v or or --version');
		} 
	};
});

