"use strict";
const cp = require("child_process");
//Start listening for user input from the command line.
process.stdin.resume();
//Set character encoding of incoming input
process.stdin.setEncoding('utf8');
let runningTotal = 0;
//Listen to the data event. Occurs when the user hits return
process.stdin.on('data', function(str) {
    //Clean any leading or trailing whitespace
    str = str.trim();
    //Check if the user wants to quit
    if (str == 'done') {
        console.log("Exiting program. Good bye");
        process.exit();
    }
    else {
        //parse string into individual values. divide on spaces
        str = str.split(" ");
        str.unshift('./calc.js');
        if (str.length < 4) {
            str.splice(2, 0, runningTotal);
        }
        //Print out the user's input
        //addUserInput(str);
        //spawn new child process
        //new child process will output user input
        const cmd = cp.spawn('node', str);
        cmd.on('error', (err) => {
            console.error(`${ err.stack }`);
        });
        cmd.stdout.on('data', (data) => {
            runningTotal = parseInt(data);
            console.log(`${ runningTotal }`);
        });
        cmd.stderr.on('data', (data) => {
            console.error(`STDERR: ${ data }`);
        });
        cmd.on('close', (code) => {
            console.log(`Child process spawn existed with code: ${ code }`);
        });
    }
});
