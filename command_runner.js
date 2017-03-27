var cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  data = data.trim();
  var parsedData = parseData(data);
});

function parseData(data) {
  var myArr = data.split(' ');
  var cmd = myArr[0];
  var params = myArr.slice(1);
  console.log(cmd, params)
}



