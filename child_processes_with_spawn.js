var cp = require('child_process');

var cmd = cp.spawn('ps',  ['a']);

cmd.on('error', (err) => {
  console.error(`${err.stack}`)
});

cmd.stdout.on('data', (data)=>{
  console.log(`Data: ${data}`);
})

cmd.stderr.on('data', (data)=>{
  console.error(`STDERR: ${data}`);
})

cmd.on('close', (code)=>{
  console.log(`Exited with code: ${code}`);
})
