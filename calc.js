let fs = require('fs');
let cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on("data", function (str) {
    str = str.trim().split(" ");
    
    let firstComp = calc.add(str[1], str[2]);  

    let calc = new Calculator(firstComp);

    str = str.slice(4);
    //let cmd = cp.spawn('calculator', str);

    //cmd.stdout.setEncoding('utf8');

    console.log(calc.total);

    process.stdout.on('data', (data) => {
        console.log(data);
    });

    if (str[0] === '\\q' || str[0] === '\\quit') {
        console.log('Goodbye.');
        process.exit();
    };

});

class Calculator {
  constructor(total) {
    this.total = total;
  }

  operate(method, num) {
     switch (method) {
        case "add":
            return this.add(this.total, num);
        case "sub":
            return this.sub(this.total, num);
        case "div":
            return this.div(this.total, num);
        case "mult":
            return this.mult(this.total, num);
    }
  }

  add(a, b) {
    this.total = a + b;
  }
  sub(a, b) {
    this.total = a - b;
  }
  div(a, b) {
    this.total = a / b;
  }
  mult(a, b) {
    this.total = a * b;
  }
}


