var cp = require('child_process');

var cmd = cp.exec('ps aux', (err, stdout, stderr) => {
  if (err) throw err;
  if (stderr) console.log(`STDERR: ${stderr}`);
  
  console.log(`STDOUT: ${stdout}`)
});

cmd.on('exit', (code) => {
  console.log(`EXIT CODE: ${code}`)
});

// var spawncmd = cp.spawn('ps', ['aux']);
// 
// spawncmd.stdout.on('data', (data) => {
//   console.log(`STDOUT 2: ${data}`);
// })
// 
// spawncmd.on('close', (code) => {
//   console.log(`EXIT CODE 2: ${code}`)
// });