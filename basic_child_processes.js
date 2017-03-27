const cp = require('child_process');

// var cmd = cp.spawn('ps', ['aux']);
//
// cmd.stdout.on('data', (data) => {
//   console.log(`Data: ${ data }`);
// });
//
// cmd.stderr.on('data', (data) => {
//   console.error(`Error: ${ data }`);
// });
//
// cmd.on('close', (code) => {
//   console.log(`Child process exited with code: ${ code }`);

// });

var cmd = cp.exec ('ps "aux"', (err, stdout, stderr) => {
  if(err){
    console.error(err.stack);
    console.error(`Error code: ${ err.code }`);
    console.error(`Signal received: ${ err.signal }`);
  }

  if (stderr){
    console.error(`Child Process STDERR: ${ stderr }`);
  }

  console.log(`Child Process STDOUT: ${ stdout }`);
});

cmd.on('exit', (code) => {
  console.log(`Child process exited with code: ${ code }`);
});
