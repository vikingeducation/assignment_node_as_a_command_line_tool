const fs = require('fs');
var cp = require('child_process')
var uInput = "";
process.stdin.resume();
process.stdin.setEncoding('utf8');
//var command = cp.spawn('ps', ['aux'])

process.stdin.on('data', (str) => {
str = str.toString().trim();

 newArr = str.toString().split(" ");
console.log(newArr);

rndVar = cp.spawn(newArr[0],newArr.slice(1));

rndVar.stdout.on('data', (data) => {
  console.log(`these should be the processes: ${data}`)
})

//
//
  if (str === '/q') { process.exit();}
    // our quit funbction
//OurQuit(uInput);
//   } else {
// uInput += str;
//     console.log(str)
//   }
 }
)
