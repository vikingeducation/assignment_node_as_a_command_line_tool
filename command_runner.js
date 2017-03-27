process.stdin.resume();

process.stdin.setEncoding('utf8');

var child_process = require('child_process');

process.stdin.on('data', function(str) {
  str = str.trim();

  if (str === 'q' || str === 'quit') {
    console.log('Goodbye');
    process.exit();
  } else {
    str = str.split(' ');
    var cmdSpawn = child_process.spawn(str[0], str.slice(1));
    cmdSpawn.stdout.on('data', (data) => {
      console.log(`${ data }`);
    });
  }

});

