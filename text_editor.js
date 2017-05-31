var fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_array = [];

process.stdin.on('data', (data) => {
  input = data.trim();
  if (input === '\/q') {
    console.log('See ya!');
    process.exit();
  } else {
    input_array.push(input);
  }
});

process.on('exit', () => {
  output_string = input_array.join('\n');
  fs.writeFileSync('message.txt', output_string);
})