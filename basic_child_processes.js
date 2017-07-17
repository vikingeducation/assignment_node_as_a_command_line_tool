/*Create a file basic_child_processes.js


Require the child_process library

Create a child process that runs the ps command with aux arguments

For more info on the ps command run man ps

Depending on whether you choose to use exec or spawn your listeners and setup here will be a bit different

Try both! Notice the differences between the callback setups for the two methods

Verify that you can output the returned result of the ps from each child process
Commit!*/


const cp = require('child_process');
var aux_args = process.argv.slice(2);
var cmd = cp.spawn('ps', [ aux_args ]);

cmd.stderr.on('data', (error) => {
  console.log( error );
  console.log( "Firing an error!")
})

cmd.stdout.on('data', (data) => {
  console.log(data);
  debugger;
})

cmd.on('close', (statusCode) => {
  console.log(`child_process ended, statusCode = ${statusCode}`);
})



//format
//node basic_child_processes ps [aux arguments]
