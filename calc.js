let fs = require('fs');
let cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on("data", function (str) {
    str = str.trim().split(" ");
    
    let cmd = cp.spawn(str[0], [str[1],str[2]]);

    let add = (a, b) => {
        return a + b;
    }
    let sub = (a, b) => {
        return a - b;
    }
    let div = (a, b) => {
        return a / b;
    }
    let mult = (a, b) => {
        return a * b;
    }

    cmd.stdout.setEncoding('utf8');

    cmd.stdout.on('data', (data) => {
        console.log(data);
    });

    if (str[0] === '\\q' || str[0] === '\\quit') {
        console.log('Goodbye.');
        process.exit();
    };

});
