//How will you map user input to JavaScript functions?
// parse data, return array
// loop through array

//How will you properly pass arguments to subcommands to the appropriate function?

//How will you enable subcommand chaining?

//How will you allow options like -h and -v and their aliases --help and --version to output the correct information?

var cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var subArr = ['add', 'sub', 'mult', 'div'];
var funcType;
var total = 0;

process.stdin.on('data', (data) => {
  data = parseData(data);
  //console.log(`Data is: ${data}`);
  for (var i = 0; i < data.length; i++) {
    if (typeof parseInt(data[i]) === 'number') {
      console.log('number!');
    }

    if (typeof data[i] === 'string') {
      if (subArr.indexOf(data[i]) !== -1) {
        funcType = data[i];
      }
    } else if (typeof parseInt(data[i]) === 'number') {

     //funcType(data[i], total);
     total = add(data[i], total);
    }
  }
  //console.log(total);
});

function add(num, total) {
  console.log('hit add');
  total+= num;
  return total;
}

function sub(num, total) {
  total-= num;
  return total;
}

function parseData(data) {
  data = data.trim().split(' ');

  for (var i = 0; i < data.length; i++) {
    if (typeof parseInt(data[i]) === 'number') {
      console.log(parseInt(data[i]));

      parseInt(data[i]);
 

    }
  }
  console.log(data);
  return data;
};

