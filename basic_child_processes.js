//bring in the whole module
//const cp = require('child_process');

//bring in spawn() only
const spawn = require('child_process').spawn;

//const my_ps = cp.spawn('ps', ['aux']);
const my_ps = spawn('ps', ['aux']);

//setup listener on error. these are real errors in executing command
my_ps.on('error', err => {
	console.error(`error: ${err.stack}`);
});

//setup output stream listener on data
my_ps.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

//setup output stream listener on data. These are errors during execution
my_ps.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

//setup listener on close event
my_ps.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
