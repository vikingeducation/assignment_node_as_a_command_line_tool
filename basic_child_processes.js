const cp = require('child_process');

var cmd = cp.exec('ps -aux', (err, stdout, stderr) => {
  console.log(`logging... ${stdout}`);
});

