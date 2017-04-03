"use strict";

//get input from process.argsv
let cliArgs = Array.from(process.argv).slice(2);
//if the first cli argument begins with a - or --
//regex to match any value beginning with - or --
// /^-{1,2}/

let regexFlags = new RegExp(/^-{1,2}/);

//map it to the appropriate function to output to the user
//if the first value matches our regexp
if (regexFlags.test(cliArgs[0])) {
    //extract the flag
    let flag;
    //Check the it matches exactly two dashes
    if (/^-{2}/.test(cliArgs[0])) {
        flag = cliArgs[0].substring(2);
    } else {
        flag = cliArgs[0].substring(1);
    }
    
    
    //if so, substring starting at 2
    //else, substring starting at 1
    switch (flag) {
        case "v":
        case "version":
            //send to version subprocess
            console.log("Here is the version!");
            break;
        case "h":
        case "help":
            //send to help text
            console.log("Here is the help docs!");
            break;
        default:
            console.log("That is not a valid flag");
        
        
        
        
        
    }
    
}



console.log(cliArgs);








//aliasing will be done by referencing the same function