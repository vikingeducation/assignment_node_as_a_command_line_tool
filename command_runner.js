var cp = require('child_process');

process.stdin.resume();

process.stdin.setEncoding('utf8');


process.stdin.on('data', (data) => {
  data = data.trim();

  if ( data === '\\q') {
    console.log('Exiting the process');
    process.exit();
  } else {
    var cmd = cp.spawn(`${ data }`);

    cmd.stdout.on('data', (data) => {
      console.log(`STDOUT: ${ data }`)
    })

    cmd.on('error', (err) => {
      console.error(`${ err.stack }`);
    })

    cmd.stderr.on('data', (data) => {
      console.log(`STDERR: ${ data }`)
    })

    cmd.on('close', (code) => {
      console.log(`Child process exited with code: ${ code }`);
    });

  }


})
