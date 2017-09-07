const cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data){

  data = data.trim();

  //Map user input (quit or do stuff)
  if (data === '\\q' || data === '\\quit'){
    console.log('goodbye')
    process.stdin.pause();
  } else {
    //parse the input and save return value as object
    var inputs = parseInputs(data);
    //feed parsed stuff into spawn using object
    spawnNewChildProcess(inputs.command, inputs.args)
  }

});


function parseInputs(data){

  var dataArray = data.split(' ');//turn "data" from input from string to array
  var command = dataArray[0];//save the first value in array as command
  var args = dataArray.slice(1);//save every other val as args
  //how to return multiple vals
  //https://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript
  return {
    command: command,
    args: args
  };

};


function spawnNewChildProcess(command, args) {
  
  const cmd = cp.spawn(command, [args])

  cmd.on('error', (err) => {
    console.log(err.stack);
  });

  cmd.stdout.on('data', (data) => {
    console.log(`STDOUT: ${ data }`);
  });

  cmd.stderr.on('data', (data) => {
    console.error(`STDERR: ${ data }`);
  });

  cmd.on('close', (code) => {
    console.log(`child_process closed with code: ${ code }`);
  })

}
