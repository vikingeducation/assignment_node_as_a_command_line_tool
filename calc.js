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

//create regex to only match calculator functions
let calcFunctionsRegex = new RegExp(/add|sub|mult|div/);
if (calcFunctionsRegex.test(cliArgs[0])) {
    //turn cliArgs into an array of grouped functions and values
    let groups = [];
    //Grab the first group
    groups.push(cliArgs.splice(0,3));

    while(cliArgs.length > 0) {
        groups.push(cliArgs.splice(0,3));

    }
    let total = groups.reduce(function (acc, element) {
        
        let value = calculate(element);
        return value += acc;
    }, 0);
    

    console.log("The total was", total);
    return total;
}




console.log(cliArgs);








//aliasing will be done by referencing the same function



function calculate(cliArgs) {
    let calcFunc = cliArgs[0];
    let value;
    let a = Number(cliArgs[1]);
    let b = Number(cliArgs[2]);
    
    switch (calcFunc) {
        case "add":
            value = a + b;
            break;
        case "sub":
            value = a - b;
            break;
        case "div":
            value = a / b;
            break;
        case "mult":
            value = a * b;
            break;
        default:
            console.log("That is not a valid calc function");
        
    }
    return value;
}