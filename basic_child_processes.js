var  cp  = require('child_process');

var psVar = cp.exec("ps 'aux' ", (err, stdout, stderr) => {

  if (err) {
    console.log(err)
  }

  if (stderr) {
    console.log(stderr)
  }

  console.log(stdout)

});

// psVar.stdout.setEncoding('utf8');
// psVar.stdout.on('data', function(data){
//   console.log(data);
// });
