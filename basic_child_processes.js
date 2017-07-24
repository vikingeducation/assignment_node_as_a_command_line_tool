/*Create a file basic_child_processes.js


Require the child_process library

Create a child process that runs the ps command with aux arguments

For more info on the ps command run man ps

Depending on whether you choose to use exec or spawn your listeners and setup here will be a bit different

Try both! Notice the differences between the callback setups for the two methods

Verify that you can output the returned result of the ps from each child process
Commit!*/


const cp = require('child_process');

//var aux_args = process.argv.slice(2); //this doesn't work, it

//grab our command arguments
// var aux_args = process.argv;
// aux_args.splice(0, 2);
// debugger;

var cmd = cp.spawn('ps', ['aux']);
//spawn sytnax takes, args as a list of strings
//var cmd = cp.spawn('echo', aux_args );

/*
if ( aux_args.length === 0 ){
  cmd = cp.spawn('echo', 'things');
}else{
  cmd = cp.spawn('echo', aux_args );
}*/

cmd.on('error', (err) => {
  console.error(`${err.stack}`);
});

cmd.stderr.on('data', (error) => {
  console.error(`STDERR: ${error}`);
})

cmd.stdout.on('data', (data) => {
  //console.log( data );    //this just spits out the stream data
  console.log(`Data = ${data}`);    //this actually converts it to a string
  debugger;
})

cmd.on('close', (statusCode) => {
  console.log(`child_process ended, statusCode = ${statusCode}`);
})



//format
//node basic_child_processes [aux arguments]
