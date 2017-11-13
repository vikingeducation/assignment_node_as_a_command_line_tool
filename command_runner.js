var  cp  = require('child_process');

process.stdin.resume();

process.stdin.setEncoding('utf8');

var cmd;

process.stdin.on('data', (data) => {
  data = data.trim();

  let input_vars = data.split(' ');

  if (data === 'q' || data == 'quit') {
    console.log('Goodbye.');
    process.exit();
  } else {
      cmd = cp.spawn(input_vars[0], [ input_vars[1,input_vars.length-1] ] )

      cmd.stdout.setEncoding('utf8');

      cmd.stdout.on('data', (data) => {
        console.log(data)
    })
  }
  foo()
})

var foo = function(){
  console.log(input_vars, data)
}
