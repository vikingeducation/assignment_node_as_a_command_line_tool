const cp = require('child_process');
var aux = process.argv.slice(2);

//New 'ps' child process with spawn
const spawnNewProcess = cp.spawn('ps', ['aux']);

newProcess.on('error', err => console.error(`${err.stack}`));

newProcess.stdout.on('data', data => console.log(`${data}`));

newProcess.stderr.on('data', data => console.error(`STDERR: ${data}`));

newProcess.on('close', code =>
  console.log(`Child process exited with code: ${code}`)
);

//New 'ps' child process with exec
const execNewProcess = cp.exec('ps "aux"', (err, stdout, stderr) => {
  if (err) {
    console.error(err.stack);
    console.error(`Error code: ${err.code}`);
    console.error(`Signal received: ${err.signal}`);
  }

  if (stderr) {
    console.error(`Child Process STDERR: ${stderr}`);
  }

  console.log(`Child Process STDOUT: ${stdout}`);
});

execNewProcess.on('exit', code =>
  console.log(`Child process exited with code: ${code}`)
);

//Comment out one of the processes before running
