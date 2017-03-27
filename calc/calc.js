//How will you map user input to JavaScript functions?
//  with stdin listener

//How will you properly pass arguments to subcommands to the appropriate function?
//

//How will you enable subcommand chaining?

//How will you allow options like -h and -v and their aliases --help and --version to output the correct information?
//


console.log("Started process");
process.stdin.resume();
process.stdin.setEncoding('utf8');

var cp = require('child_process');
var pkgjson = require('./package.json')

var inputFormat = function(input) {
  var input = str.split(" ");
  // var command = input[0];
  // var args = input.slice(1);
  console.log(input);
  return input;
}



process.stdin.on('data', function(str) {
  str = str.trim();

  // call object keys if there are a lot of if/elses
  if (str === 'q' || str === 'quit') {
    process.exit();
  } else if (str === '-v' || str === '--version') {
    console.log(pkgjson.version)
  } else if (str === '-h' || str === '--help') {
    console.log(pkgjson.help)
  }

  else {
    // var formattedInput = inputFormat(str);
    // console.log();
    inputFormat(str);
    //console.log(input);

    //Perform calculator functions
  }
});

// var add = function(a, b) {
//   return a + b;
// }





    // var input = str.split(" ");
    // var cmd = cp.spawn(input[0], input.slice(1,input.length));

    // cmd.stdout.on('data', function(data) {
    //   console.log(`${data}`);
    // })

    // cmd.stderr.on('data', function(data) {
    //   console.error(`Error: ${data}`);
    // })
