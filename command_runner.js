var cp = require('child_process');


process.stdin.resume();
process.stdin.setEncoding("utf8");

var input;
var args = [];

process.stdin.on('data', (data) => {
  data = data.trim();
  input = data;
  input = input.split(' ');
  for (i=1;i<input.length;i++) {
    args.push(input[i]);
  }
  let cmd = cp.spawn(input[0], args);
  cmd.stdout.on(data, (data) => {
    console.log(`Data: ${ data }`);
  })
})
