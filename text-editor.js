var fs=require('fs');


var writeToFile = new Promise(function(resolve, reject){

});


process.stdin.resume();
process.stdin.setEncoding('utf-8');

var userInput="";
process.stdin.on('data', function(string){
  string=string.trim();
  if (string ==='\\q'|| string ==='quit'){
    fs.writeFile('./data/input.txt', userInput, function(err){
      if (err){
        throw err;
        console.log("error, something went wrong");
      }
    }).then(function(){
      process.exit();
    });
  }
  else{
    userInput += string;
  }
});