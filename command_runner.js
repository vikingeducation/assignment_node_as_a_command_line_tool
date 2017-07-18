var cp = require('child_process');


process.stdin.resume();
process.stdin.setEncoding("utf8");

var input;

process.stdin.on('data', (data) => {
  data = data.trim();

  if (data === 'q' || data === 'quit') {
    console.log('Bye!');
    process.exit();
  }

  input = data;
  input = input.split(' ');

  logIt(input);
});

function logIt(input) {
  let cmd = cp.spawn(input[0], input.slice(1));

  cmd.stdout.on('data', (data) => {
    console.log(`${ data }`);
  });

  cmd.stderr.on('data', (data) => {
    console.error(`${ data }`);
  });

  cmd.on('error', (err) => {
    throw err;
  })
}
