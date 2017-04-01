var cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  data = data.trim();
  
  if(data === 'q' || data === 'quit') {
  	process.exit();
  } else {
  	var parsedData = parseData(data);
  	var cmd = cp.spawn(parsedData.command, parsedData.params);
  	
  	cmd.stdout.on('data', (data) => {
	  console.log('data: ' + data);
	});
  	cmd.on('error', (err) => {
	  console.error('error: ' + err);
	});
  }
});

var parseData = function(data) {
  var myArr = data.split(' ');
  var command = myArr[0];
  var params = myArr.slice(1);

  return {
  	command: command,
  	params: params
  };
}



