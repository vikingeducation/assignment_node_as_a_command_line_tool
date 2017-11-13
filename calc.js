let fs = require('fs');
let cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on("data", function (str) {
    str = str.trim().split(" ");
    
    //let cmd = cp.spawn('calculator', str);

    //cmd.stdout.setEncoding('utf8');

    process.stdout.on('data', (data) => {
        console.log(data);
    });

    if (str[0] === '\\q' || str[0] === '\\quit') {
        console.log('Goodbye.');
        process.exit();
    };

});


let calculator = function (arr) {
    let first_comp;
    let total;
    
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
    
    switch (arr[0]) {
        case "add":
            first_comp = add(arr[1], arr[2]);
            break;
        case "sub":
            first_comp = sub(arr[1], arr[2]);
            break;
        case "div":
            first_comp = div(arr[1], arr[2]);
            break;
        case "mult":
            first_comp = mult(arr[1], arr[2]);
            break;
    }
    
    total = first_comp;
    
    for (var i = 3; i < arr.length; i += 2) {
        switch (arr[i]) {
            case "add":
                total = add(total, arr[i + 1]);
                break;
            case "sub":
                total = sub(total, arr[i + 1]);
                break;
            case "div":
                total = div(total, arr[i + 1]);
                break;
            case "mult":
                total = mult(total, arr[i + 1]);
                break;
        }
    }
    
    return total;
}
