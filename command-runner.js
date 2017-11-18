'use strict';
const cp = require('child_process');

const newCP = (proc, arg) => {
  let cmd = cp.spawn(proc, arg);
  cmd.on('error', err => console.error(`${err.stack}`));
  cmd.stdout.on('data', data => console.log(`${data}`));
  cmd.stderr.on('data', data => console.error(`STDERR: ${data}`));
  cmd.on('close', code =>
    console.log(`Child process exited with the code: ${code}`)
  );
};

let listenerStart = () => {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  processGenerator();
};

let processGenerator = () => {
  process.stdin.on('data', data => {
    data = data.trim();
    if (data === 'q' || data === 'quit') {
      console.log('Goodbye.');
      listenerEnd();
    }
    const dataArr = data.split(' ');
    const newProcess = dataArr[0];
    const args = dataArr.slice(1);
    newCP(newProcess, args);
  });
};

let listenerEnd = () => {
  process.exit();
};

listenerStart();
