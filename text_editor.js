'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

let output = '';

process.stdin.on('data', str => {
  if (str.trim() === '\\q') {
    console.log(output);
    fs.appendFile('./data/input.txt', output, err => {
      if (err) throw err;
    });
    process.stdin.pause();
  }
  output += str.trim();
});
