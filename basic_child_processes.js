var cp = require('child_process');

// var cmd = cp.spawn('ps', ['aux']);
//
// cmd.on('error', (err) => {
//   console.error(`${err.stack}`);
// });
//
// cmd.stdout.on('data', (data) => {
//   console.log(`${data}`);
// });
//
// cmd.stderr.on('data', (data) => {
//   console.error(`${data}`);
// });

var cmd = cp.exec('ps aux', (error, stdout, stderr) => {
  if (error) {
    console.error(`${error}`);
    return;
  }

  console.log(`${stdout}`);
  console.log(`${stderr}`);
});
