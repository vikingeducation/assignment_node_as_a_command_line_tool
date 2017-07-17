const cp = require("child_process");

/*
let cmd = cp.spawn('ps', ['aux']);

cmd.on('error', (err) => {
  console.log("NORMAL ERROR");
  console.log(`${err.stack}`)
});

cmd.stdout.on("data", (data) => {
  console.error(`Data: ${data}`);
});


// what is the difference between error and stderror?
cmd.stderr.on('data', (data) => {
  console.log("STANDARD ERROR");
  console.error(`STDERROR: ${data}`);
});

cmd.on("close", (code) => {
  console.log(`Child process exited with code: ${code}`);
});
*/


let cmd = cp.exec('ps aux', (err, stdout, stderr) => {
  if(err) {
    console.error(`${err}`);
  }

  if(stderr) {
    console.error(`${stderr}`);
  }

  console.log(`Child Process STDOUT: ${stdout}`)
});

// ASK ABOUT THIS AS WELL
cmd.on('exit', (code) => {
  console.log(`Childe process exited with code: ${code}`);
});
