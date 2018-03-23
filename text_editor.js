//require file system module
var fs = require('fs')
//start reading from stdin
process.stdin.resume();
//set encoding utf 8
process.stdin.setEncoding('utf8');
//variable to store data, has to be outside of the listener
var dataToBeWritten = "";

//listen for user data and do stuff:
process.stdin.on('data', function(data){
  //trim the whitespace
  data = data.trim();

  //allow to quit
  if (data === '\\q' || data === '\\quit') {
    //check if file exists
    if (!fs.existsSync('input.txt')){
      //if it doesn't exist  then make it and write it
      //wx flag forces a failure if file exists
      //https://stackoverflow.com/questions/12899061/creating-a-file-only-if-it-doesnt-exist-in-node-js
      fs.writeFile('input.txt', dataToBeWritten, { flag: 'wx' }, (err) => {
        if (err) throw err;
        console.log("file was created and written");
      });

    } else {
      //if it exits write the data
      fs.appendFile('input.txt', dataToBeWritten, (err) => {
        if (err) throw err;
        console.log('the "dataToBeWritten" was written to existing file');
      });
    }//end else if

    console.log('goodbye')
    process.stdin.pause();

  } else {//if not \q or \quit THEN save input into string
    dataToBeWritten += data + "\n"
    console.log(`DATA TO BE WRITTEN: ${dataToBeWritten}`)

  }

});//end process listener
