const cp = require('child_process');

const ps = cp.spawn('ps', ['aux']);

ps.on('error', (err) => {
  console.log(err.stack);
});

ps.stdout.on('data', (data) => {
  console.log(`STDOUT: ${ data }`);
});

ps.stderr.on('data', (data) => {
  console.error(`STDERR: ${ data }`);
});

ps.on('close', (code) => {
  console.log(`child_process closed with code: ${ code }`);
})
