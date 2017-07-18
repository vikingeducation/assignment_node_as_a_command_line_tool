/*
Set up a listener with process.stdin
When input is received parse that input into variables that can be passed to the spawn method
Pass those variables to the spawn method creating a new child process
Output the result of the child process to STDOUT
Each time the user inputs a command it should create a new child process
Don't forget to allow the user to quit with q and quit
Verify that you can forward commands to your child process via STDIN and output the result
Verify that you can still quit
Commit!
*/

const cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', str => {
   if (str === '\\q\n') {
    console.log('Goodbye.')
    process.exit();
    } else {
      str = str.trim().split(' ');
      var cmd = str.splice(0, 1)[0];
      var aux_args = str;
      //
      //
      var child = cp.spawn( cmd, aux_args )
      child.stdout.on('data', data => {
        console.log(`data = ${data}`);
      });
      child.stderr.on( 'data', data => {
        console.log(`EROOR!!!!! = ${data}`);
      })
    }


  });
