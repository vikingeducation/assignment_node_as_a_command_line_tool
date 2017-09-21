const cp = require('child_process');

let cmd = cp.exec('ps aux', (err, stdout, stderr) => {
  if (err) {
   console.error(err.stack);
   console.error(`Error code: ${ err.code }`);
   console.error(`Signal received: ${ err.signal }`);
  }

  if (stderr) {
    console.error(`Child Process STDERR: ${ stderr }`);
  }

  console.log(`Child Process STDOUT: ${ stdout }`);
});

cmd.on('exit', (code) => {
  console.log(`Child process exec exited with code: ${ code }`);
});



//using spawn

/*let ps = cp.spawn('ps', ['aux']);

ps.on('error', (err) => {
  console.error(`${ err.stack }`);
});

ps.stdout.on('data', (data) => {
  console.log(`Data: ${ data }`);
});

ps.stderr.on('data', (data) => {
  console.error(`STDERR: ${ data }`);
});

ps.on('close', (code) => {
  console.log(`Child process spawn exited with code: ${ code }`);
});*/