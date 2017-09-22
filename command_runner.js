var fs = require('fs');
var spawn = require("child_process").spawn;
var cp = spawn("node"/* 1st argument is command run in terminal*/, ['Game of Thrones','Ours is the Fury', 'Winter is Here']/*2nd argument an array of everything that may be run after the node command*/)

process.stdin.on('data', (data)=> { //whenever we have a 'data' event, this call back function(data) will fire.
        data = data.trim();
        if (data === '\\q') {
                 console.log ('You Quit!');
                 process.exit();
        } else {
           cp.stdout.on('data') };
});
