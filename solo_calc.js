// I came back and made this on my own later.  
// Any errors are solely my own

let args = process.argv.slice(2);
// let operations = ['add', 'sub', 'mult', 'div', '-v', '--version', '-h', '--help'];

let result = 0;
let command;

while (args.length !== 0) {
  command = args.shift();
  switch (command) {
    case 'add':
      result = result + +args[0];
      args.shift();
      if (!isNaN(args[0])) {
        result = result + +args[0];
        args.shift();
        break;
      } else {
        break;
      }
    case 'sub':
      // is this a chained command?
      if (isNaN(args[1])) {
        result = result - +args[0];
        args.shift();
        break;
      } else {
        // this is first command
        result = +args[0];
        args.shift();
        result = result - +args[0];
        args.shift();
        break;
      }

    case 'mult':
      // is this a chained command?
      if (isNaN(args[1])) {
        result = result * +args[0];
        args.shift();
        break;
      } else {
        // this is first command
        result = +args[0];
        args.shift();
        result = result * +args[0];
        args.shift();
        break;
      }

    case 'div':
      // is this a chained command?
      if (isNaN(args[1])) {
        result = result / +args[0];
        args.shift();
        break;
      } else {
        // this is first command
        result = +args[0];
        args.shift();
        result = result / +args[0];
        args.shift();
        break;
      }

    case '-v' || '--version':
      console.log('1.0')
      break;

    case '-h' || '--help':
      console.log('see https://www.vikingcodeschool.com/dashboard#/advanced-nodejs/assignment-node-as-a-command-line-tool')
      break;
    
    default:
      console.log('Error, please try again');
  }
}

console.log(result);
