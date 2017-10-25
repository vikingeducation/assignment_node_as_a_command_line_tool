var fs = require('fs');

process.stdin.resume();

process.stdin.setEncoding('utf8');

process.stdin.on('data', function(str) {
  str = str.trim();

  if ( str === '\\q') {
    console.log('Exiting the process');
    process.exit();
  } else {
    fs.appendFile('data/input.txt', str, (err) => {
      if (err) {
        if (err.code == 'ENOENT') {
          console.log('Error code is ' + err.code + 'so we create the right directory to save the file in');
          fs.mkdir('data/')
          fs.writeFile('data/input.txt', str, (err) => {})
        } else throw err
      } else {
        console.log('File is saved now!')
      }
    })
  }
})
