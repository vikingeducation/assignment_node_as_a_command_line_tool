//commandline input and output

var fs = require('fs');
process.stdin.resume(); //tell standard in that we want to accept input(this uses.resume method) 
//How resume() works: We assume the input has been paused and we want to resume receiving it.
process.stdin.setEncoding('utf8'); //after setting encoding, now we can receive data from standard input.

process.stdin.on('data', (data)=> {
        data = data.trim();
        if (data === '\\q') {
                 console.log ('You Quit!');
                 process.exit();
        } else {
           fs.writeFile('data/input.txt', data) };
});
