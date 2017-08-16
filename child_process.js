var child_process = require('child_process');
var ps = child_process.spawn('ps', ['aux']);
var pst = child_process.exec("ps aux");


ps.stdout.on('data', (data) => {
	console.log(`spawn: ${data}`);
})

pst.stdout.on('data', (data) => {
	console.log(`exec: ${data}`);
})