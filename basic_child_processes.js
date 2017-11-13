var  cp  = require('child_process');

var psVar = cp.spawn("ps", ['aux'])

// psVar.stdout.setEncoding('utf8');

psVar.stdout.on('data', function(data){
  console.log(`${data}`);
});


//
// (err, stdout, stderr) => {
//
//   if (err) {
//     console.log(err)
//   }
//
//   if (stderr) {
//     console.log(stderr)
//   }
//
//   console.log(stdout)
//
// });
