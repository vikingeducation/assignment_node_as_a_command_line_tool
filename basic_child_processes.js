//bring in the whole module
//const cp = require('child_process');

//bring in spawn() only
const spawn = require('child_process').spawn;

//const my_ps = cp.spawn('ps', ['aux']);
const myPs = spawn('ps', ['aux']);

//setup listener on error. these are real errors in executing command
myPs.on('error', err => {
	console.error(`error: ${err.stack}`);
});

//setup output stream listener on data
myPs.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

//setup output stream listener on data. These are errors during execution
myPs.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

//setup listener on close event
myPs.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
