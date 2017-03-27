process.stdin.resume();

process.stdin.setEncoding('utf8');

var child_process = require('child_process');
var user_input = [];

process.stdin.on('data', function(str) {
  str = str.trim();

  if (str === '\\q') {
  
    user_input.forEach((input) => {
      console.log(input);
      // var cmd = child_process.spawn(input[0], input.splice(0));
      
      // cmd.stdout.on('data', (data) => {

      //   console.log(data);
      // });
    })
    console.log('Goodbye');
    process.exit();
    
  } else {
    user_input.push(str.split(' '));
    console.log(user_input);
  }

});

