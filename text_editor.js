var fs = require('fs');

process.stdin.on('data', function(str) {
  str = str.trim();

  if ( str === '\\q') {
    console.log('Exiting the process');
    fs.writeFile('data/input.txt', 'data', (err) => {
      if (err) throw err;
      console.log('File is saved now!')
    })
    process.exit();
  }
})
