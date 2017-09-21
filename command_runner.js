var fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf8')

process.stdin.on('data', (str) => {
  str = str.trim();
  if (str === 'quit') {
      console.log("quiting process")
      process.exit();
    } else {
      // spawn code here.
      var arrayArgs = str.split(' ')
      var cp = require('child_process');

      var cmd = cp.spawn(arrayArgs[0], arrayArgs.slice(1));

      cmd.on('error', err => {
        console.error(`${ err.stack }`);
      });

      cmd.stdout.on('data', data => {
        console.log(`Data: ${ data }`);
      });

      cmd.stderr.on('data', data => {
        console.error(`STDERR: ${ data }`);
      });

      cmd.on('close', code => {
        console.log(`Child process exited with code: ${ code }`);
      });
    }
  })
