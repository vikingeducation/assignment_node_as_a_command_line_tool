'use strict';

const fs = require('fs');

//start listening on stdin, set data type
//and calls listener function
let listenerStart = () => {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  listener();
};

//function to process input on stdin
//either quits and calls fileWriter or records input
//for writing later
let listener = () => {
  let output = '';

  process.stdin.on('data', str => {
    let cleanStr = str.trim();
    if (cleanStr === '\\q') {
      fileWriter(`${output}`);
    }
    output += `${cleanStr} `;
  });
};

//function to write input data to input.txt file
//If successful, stops stdin and returns
let fileWriter = input => {
  fs.appendFile('./data/input.txt', input, err => {
    if (err) {
      throw err;
    }
    listenerStop();
    console.log('\nGoodbye. See you next time. Here"s what we saved...');
  });
};

//stops listening on stdin and prints context of input.txt
let listenerStop = () => {
  process.stdin.pause();
  printer();
};

//function to read from input.txt and output it to the
//console
let printer = () => {
  fs.readFile('./data/input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
    process.exit();
  });
};

//Program startup
listenerStart();
