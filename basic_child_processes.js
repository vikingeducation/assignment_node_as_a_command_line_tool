"use strict";

const cp = require("child_process");

const cmd = cp.spawn('ps', ['aux']);

cmd.on('error', (err) => {
    console.error(`${ err.stack }`);
});

cmd.stdout.on('data', (data) => {
    console.log(`Data: ${ data }`);
});

cmd.stderr.on('data', (data) => {
    console.error(`STDERR: ${ data }`);
});

cmd.on('close', (code) => {
    console.log(`Child process spawn existed with code: ${ code }`);
});



var cmd2 = cp.exec('ps aux', (err, stdout, stderr) => {
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

cmd2.on('exit', (code) => {
  console.log(`Child process exec exited with code: ${ code }`);
});
