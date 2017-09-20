var fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf8')

process.stdin.on('data', (str) => {
  str = str.trim();
  if (str === '\\q') {
      console.log("check data/input.txt")
      process.exit();
    }else {
    fs.writeFile('./data/input.txt', str, (err) => {
      if(err) throw err;
    })

  }
})
