// const cp = require('child_process');
//
// const cmd = cp.exec('ps "aux"', (err, stdout, stderr) => {
//
//   if (err) {
//     throw err;
//   }
//
//   if (stderr) {
//     console.error(stderr);
//   }
//
//   console.log(`STDOUT: ${stdout}`)
//
//
// });
//
//
// cmd.on('close', (code) => {
//   console.log(`Closing with the code: ${code}`);
// });


const cp = require('child_process');

const cmd = cp.spawn('ps', ['aux']);

cmd.on('error', (err) => {
  console.error(err);
});

cmd.stdout.on('data', (data) => {
  console.log(`STDOUT: ${data}`);
});

cmd.stderr.on('data', (data) => {
  console.error(`STDERR: ${data}`);
});


cmd.on('close', (code) => {
  console.log(`Closing with the code: ${code}`);
});
