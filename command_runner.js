"use strict";

const fs = require('fs');
const cp = require("child_process");

//Start listening for user input from the command line.

process.stdin.resume();
//Set character encoding of incoming input
process.stdin.setEncoding('utf8');


//Listen to the data event. Occurs when the user hits return
process.stdin.on('data', function(str) {
    
    //Clean any leading or trailing whitespace
    str = str.trim();
    
    //Check if the user wants to quit
    if (str == '\\q' || str == 'quit') {
        console.log("Exiting program. Good bye");
        
        //Write user input to file
        try {
            fs.mkdirSync('./data');
        }
        catch (err) {
            //Should check type of err message and if it is because directory already created. Then continue.
            console.log("Assume error message related to directory already being created. Safe to continue.");
        }

        //Check if data folder exists in the root director
        
        //If not, make it
        
        //Save the user input to the input.txt file in the data/ directory
        //fs.appendFileSync('./data/input.txt', userInput);
        
        
        
        
        process.exit();
    } else { 
        //Print out the user's input
        //addUserInput(str);
        //spawn new child process
        
        //new child process will output user input
        const cmd = cp.spawn('echo', [ str ]);

        cmd.on('error', (err) => {
            console.error(`${ err.stack }`);
        });
        
        cmd.stdout.on('data', (data) => {
            console.log(`Data: ${ data }`);
        });
        
        cmd.stderr.on('data', (data) => {
            console.error(`STDERR: ${ data }`);
        });
        
        cmd.on('close', (code) => {
            console.log(`Child process spawn existed with code: ${ code }`);
        });
        
        console.log(str + " added to input!");
    }
    
    
    
    
});


