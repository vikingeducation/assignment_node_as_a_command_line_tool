const cp = require('child_process');
let counter = 0

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(str) {
  
  str = str.trim();

  if (str === '\\q') {
  	
    console.log('Goodbye.');
    process.exit();

  } else {

  	let args = str.split(' ');

    //spawn a child process
    let cmd = cp.spawn(args[0], args.slice(1));
    counter++;

	cmd.on('error', (err) => {
	  console.error(`${ err.stack }`);
	});

	cmd.stdout.on('data', (data) => {
	  console.log(`STDOUT( ${ counter } ): ${ data }`);
	});

	cmd.stderr.on('data', (data) => {
	  console.error(`STDERR: ${ data }`);
	});

	cmd.on('close', (code) => {
	  console.log(`Child process spawn exited with code: ${ code }`);
	});

  }
});
