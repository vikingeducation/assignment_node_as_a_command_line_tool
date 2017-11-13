/*
var cp = require('child_process');

var cmd = cp.spawn();
*/

var cp = require('child_process')

//starting the listening
process.stdin.resume()

process.stdin.setEncoding('utf-8')

process.stdin.on('data', function(input){

  input = input.trim()

  input = input.split(" ")

  var command = input.slice(1)

  if(input[0] == 'q' || input[0] == 'quit'){
    //ending the listening and closing
    process.exit()
  }
  else{
    var cmd = cp.spawn(input[0], command)

    cmd.stdout.setEncoding('utf-8')

    cmd.stdout.on('data', (output) => {
      console.log(output);
    })
  }

})
