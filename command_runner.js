const cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  data = data.trim();
  if (data === 'q' || data === 'quit') {
    console.log('Goodbye!');
    process.exit();
  }


});

function spawnChildProcess(command, args) {
  let cmd = cp.spawn(command, args);
}
