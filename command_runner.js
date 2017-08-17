var cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (str) => {
  str = str.trim();
  var inputs = [];
  var inputCounter = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      inputCounter++;
    }
    else {
      if (inputs[inputCounter] === undefined)
        {
          inputs[inputCounter] = str[i];
        }
        else {
          inputs[inputCounter] += str[i];
        }
    }
  }
  if (str === '\\q') {
    process.stdin.pause();
  }
  else {

    var oper = inputs[0];
    inputs.shift();
    //console.log (oper, inputs);

    var cmd = cp.spawn(oper, inputs);

    cmd.on('error', (err) => {
      console.error(err.stack);
    });

    cmd.stdout.on('data', (data) => {
      //console.log(`${data} was correctly outputed`);
      console.log (`${data}`);
    });

    cmd.stderr.on('data', (data) => {
      console.error(`STDERR: ${ data }`);
    });

  }
})
