var cp = require('child_process');

// var cmd = cp.spawn('ps', ['aux']);

// cmd.stdout.on('data', function(data) {

//   console.log(`Data: ${data}`);
// })

// cmd.stderr.on('data', function(data) {

//   console.error(`Error: ${data}`);
// })

//??Difference between stderr and callback err

var cmd = cp.exec('ps aux', function(err, stdout, stderr) {
  if (err) {
    console.log(err);
  }
  if (stderr) {
    console.log(stderr);
  } else {
    console.log(stdout);
  }
})