let fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data)=>{
    data = data.trim();

    if(data === '\\q'){
        console.log('Exited');
        process.exit();
    }

    fs.writeFile('./data/input.txt', data, (err) =>{
        if(err) throw err;
    });
});