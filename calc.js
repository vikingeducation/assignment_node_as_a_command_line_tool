//How will you map user input to JavaScript functions?
//  with stdin listener

//How will you properly pass arguments to subcommands to the appropriate function?
//  

//How will you enable subcommand chaining?

//How will you allow options like -h and -v and their aliases --help and --version to output the correct information?


console.log("Started process");
process.stdin.resume();
process.stdin.setEncoding('utf8');



process.stdin.on('data', function(str) {
  str = str.trim();

  if (str === 'q' || str === 'quit') {
    process.exit();
  }
  else {
    var input = str.split(" ");
    var cmd = cp.spawn(input[0], input.slice(1,input.length));

    cmd.stdout.on('data', function(data) {
      console.log(`${data}`);
    })

    cmd.stderr.on('data', function(data) {
      console.error(`Error: ${data}`);
    })
  }
});

var cp = require('child_process');

// var inputFormat = function(input) {
  
// }