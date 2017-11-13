'use strict';
const cp = require('child_process');

let output = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', str => {
  str = str.trim();
  if (str === "q" || str === "quit") {
		console.log("what")
		process.exit()
	}
  let arr = str.split(' ');
  console.log(arr)
  const cmd = cp.spawn("echo", arr);
  cmd.stdout.setEncoding('utf8');
cmd.stdout.on('data', vals => console.log(vals));
});


