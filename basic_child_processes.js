var cp = require('child_process');

var ps = cp.spawn('ps', ['aux']);

ps.stderr.on('data', (data) => {
  console.log(`STDERR: ${ data }`)
})

ps.stdout.on('data', (data) => {
  console.log('SPAWN METHOD GOES HERE')
  console.log(`STDOUT: ${ data }`)
})

ps.on('close', (code) => {
  console.log(`Child process exited with code: ${ code }`);
});

var cmd = cp.exec('ps aux', (err, stdout, stderr) => {
  if (err) {
     console.error(`Error code: ${ err.code }`);
  }

  if (stderr) {
    console.error(`Error code of child process is: ${ stderr }`);
  }

  console.log('EXEC METHOD GOES HERE===============================================================')
  console.log(`STDOUT: ${ stdout }`)
})

cmd.on('exit', (code) => {
  console.log(`Child process exited with code: ${ code }`)
})
