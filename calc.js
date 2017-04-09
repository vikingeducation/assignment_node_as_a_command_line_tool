"use strict";
const versionNumber = '1.0.0';
const cp = require("child_process");
//get input from process.argsv
let cliArgs = Array.from(process.argv).slice(2);
let flags = {
    "version": false,
    "help": false,
    "debug": false,
    "interactive": false,
};
//set the flags found on the script call
flagsSetter(cliArgs);
if (flags.version) {
    console.log(`CALC.JS v${versionNumber}`);
    process.exit();
}
if (flags.help) {
    //grab help manual
    let manual = require("./help/manual.json");
    let command = cliArgs[0];
    if (command) {
        console.log(`${ command }: ${ manual[command] }`);
    }
    else {
        console.log(JSON.stringify(manual, null, 2));
    }
    process.exit();
}
if (flags.interactive) {
    let cmd = cp.spawn('node', ['./calc_runner.js']);
}
//create regex to only match calculator functions
let calcFunctionsRegex = new RegExp(/add|sub|mult|div|pow|sqrt/);
if (calcFunctionsRegex.test(cliArgs[0])) {
    //turn arguments in sets
    let setsOfCommands = [];
    while (cliArgs.length > 0) {
        let calcSet = [];
        if (cliArgs[0].match(/sqrt/i) && setsOfCommands.length > 0) {
            calcSet.push(cliArgs[0]);
            cliArgs.splice(0, 1);
        }
        else if (setsOfCommands.length == 0 && !cliArgs[0].match(/sqrt/i)) {
            calcSet.push(cliArgs[0], cliArgs[1], cliArgs[2]);
            cliArgs.splice(0, 3);
        }
        else {
            calcSet.push(cliArgs[0], cliArgs[1]);
            cliArgs.splice(0, 2);
        }
        setsOfCommands.push(calcSet);
    }
    //Grab the first set of commands for the calculator
    let total = setsOfCommands.reduce((acc, args) => {
        //if args length is two, we need to add the initial value at position 1
        if ((args.length == 2 && !(args[0] == "sqrt")) || args.length == 1) {
            args.splice(1, 0, acc);
        }
        let newValue = calculate(args);
        if (flags.debug) {
            if (args[0] == "sqrt") {
                console.log(`${ args[0] } ${ args[1] } => ${ newValue }`);
            }
            else {
                console.log(`${ args[0] } ${ args[1] } ${ args[2] } => ${ newValue }`);
            }
        }
        return newValue;
    }, 0);
    console.log(total);
}
//aliasing will be done by referencing the same function
function calculate(args) {
    let calcFunc = args[0];
    let value;
    let a = Number(args[1]);
    let b = Number(args[2]);
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
        case "pow":
            value = Math.pow(a, b);
            break;
        case "sqrt":
            value = Math.sqrt(a);
            break;
        default:
            console.log("That is not a valid calc function");
    }
    return value;
}

function flagsSetter(args) {
    //check for all the flags and set the flags object as appropriate
    let regexFlags = new RegExp(/^-{1,2}/);
    //map it to the appropriate function to output to the user
    //if the first value matches our regexp
    if (regexFlags.test(args[0])) {
        //extract the flag
        let flag;
        //Check the it matches exactly two dashes
        if (/^-{2}/.test(args[0])) {
            flag = args[0].substring(2);
        }
        else {
            flag = args[0].substring(1);
        }
        //if so, substring starting at 2
        //else, substring starting at 1
        switch (flag) {
            case "v":
            case "version":
                //send to version subprocess
                flags.version = true;
                break;
            case "h":
            case "help":
                //send to help text
                flags.help = true;
                break;
            case "d":
            case "debug":
                console.log("Debug mode!");
                flags.debug = true;
                break;
            case "i":
            case "interactive":
                console.log("Interactive mode!");
                flags.interactive = true;
                break;
            default:
                console.log("That is not a valid flag");
        }
        //remove the arguments from the args list
        args.splice(0, 1);
    }
}
