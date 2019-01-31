const [REL_PATH, FULL_PATH, ...ARGS] = process.argv;

class Calculator{
  constructor(args){
    this.version = 1;
    this.action = args[0];
    
    this.nums = (function(){
      return args.slice(1)
                  .map((n) => {
                    return Number(n);
                  });

    })();

    this.add = (arr) => {
      return arr.reduce((a, b) => {
        return a + b;
      });
    };

    this.sub = (arr) => {
      return arr.reduce((a, b) => {
        return a - b;
      });
    };

    this.mult = (arr) => {
      return arr.reduce((a, b) => {
        return a * b;
      });
    };

    this.div = (arr) => {
      return arr.reduce((a, b) => {
        return a // b;
      });
    };            

    this.calculate = () => {
      let message;

      switch (this.action) {
        case 'add':
          message = this.add(this.nums);
          break;
        case 'sub':
          message = this.sub(this.nums);
          break;
        case 'mult':
          message = this.mult(this.nums);
          break;
        case 'div':
          message = this.div(this.nums);
          break;    
        default:
          message = 'invalid';      
      }
      console.log(message);
    };

    //next function
  }
}

var calc = new Calculator(ARGS);
calc.calculate();
