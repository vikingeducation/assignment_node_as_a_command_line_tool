var fs=require('fs');

/*
function writePromise(){
  console.log('writePromise started');
  var writeToFile = new Promise(function(resolve, reject){
    fs.writeFile('./data/input.txt', userInput, function(err){
      if (err){
        throw err;
        console.log("error, something went wrong");
      }
    })
  });
  return writeToFile
}
*/

function writeToFile(words){
  return new Promise(function(resolve, reject){
    fs.writeFile('./data/input.txt', words, function(err){
      if (err){
        throw err;
        console.log("error, something went wrong");
        reject()
      }

      console.log("The file was saved!");
      resolve()
    })
  })
}


process.stdin.resume();
process.stdin.setEncoding('utf-8');

var userInput="";
process.stdin.on('data', function(string){
  string=string.trim();
  if (string ==='\\q'|| string ==='quit'){
    writeToFile(userInput).then((result) => {
      process.exit()
    });
    /*
    fs.writeFile('./data/input.txt', userInput, function(err){
      if (err){
        throw err;
        console.log("error, something went wrong");
      }

      console.log("The file was saved!");

      process.exit();
    })
    */
  }
  else{
    userInput += string;
  }
});
