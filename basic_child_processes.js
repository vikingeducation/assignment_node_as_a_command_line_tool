const cp = require('child_process');
var aux = process.argv.slice(2);
const bob = cp.spawn("ps",["aux"]);

bob.stdout.on('data', function(data){
console.log(`${data}`);
})

