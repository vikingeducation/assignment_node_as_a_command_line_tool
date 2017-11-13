'use strict';
const cp = require('child_process');

let output = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', str => {
  str = str.trim();
  output += str.split(' ');
  let arr = output.slice(1);
  const cmd = cp.spawn(output[0], arr);
});

process.stdout.setEncoding('utf8');
process.stdout.on('data', vals => console.log(vals));
