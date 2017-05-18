const math = require("mathjs");
let argsList = process.argv;

let startCalc = function(){
    if(argsList[2].toLowerCase() === '-v' || argsList[2].toLowerCase() === '--version'){
        console.log("Version 1.0.0");
    }
    else if(argsList[2].toLowerCase() === '-h' || argsList[2].toLowerCase() === '--help'){
        console.log('To use addition command ---  add (a) (b)  \n' +
                    'To use subtraction command --- sub (a) (b) \n' + 
                    'To use divsion command --- sub (a) (b) \n' +
                    'To use multiplication command --- sub (a) (b) \n'+
                    'To chain multiple operation commands --- add (a) (b) sub (b) \n' +
                    'Result value from the previous command will be used as a value in the subsequent operation \n' + 
                    '*NOTE - When entering values do not use the paranthesis' );
    }

    else {
        console.log(spliceArgList());
    }


}

let initialOperation = function () {
    if (argsList[2].toLowerCase() === 'add') {
        return math.add(argsList[3], argsList[4]);
    }
    if (argsList[2].toLowerCase() === 'sub') {
        return math.subtract(argsList[31], argsList[4]);
    }
    if (argsList[2].toLowerCase() === 'div') {
        return math.divide(argsList[3], argsList[4]);
    }
    if (argsList[2].toLowerCase() === 'mult') {
        return math.multiply(argsList[3], argsList[4]);
    }
}

let chainOperations = function (previousResult) {
    console.log(argsList);
    if (argsList[0].toLowerCase() === 'add') {
        return math.add(previousResult, argsList[1]);
    }
    if (argsList[0].toLowerCase() === 'sub') {
        return math.subtract(previousResult, argsList[1]);
    }
    if (argsList[0].toLowerCase() === 'div') {
        return math.divide(previousResult, argsList[1]);
    }
    if (argsList[0].toLowerCase() === 'mult') {
        return math.multiply(previousResult, argsList[1]);
    }

}

//Splicing approach. After the initial operation is done the first 4 args are spliced
//The spliced array now will have the subsequent command operation in first element followed by a value in the second element (chained operations).
//After the command is performed both the command and its value are spliced and the pattern continues until the array is empty.
let spliceArgList = function(){
    let result = initialOperation();
    argsList.splice(0,5);

    while(argsList.length > 0){
        result = chainOperations(result)
        argsList.splice(0,2);
    }
    return result;
}

startCalc();