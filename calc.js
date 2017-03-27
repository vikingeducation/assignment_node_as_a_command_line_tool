//maping will be done with stdin resume()
// use argv[2] operation
//read through the array and
// if its !number it an operation
//    use switch to verify it is one of the defined operations
//    u
// if (-v || --version)
//print version 1.0.0
//else if( -h || --help)
//print enter lorem ipsom
//else if(add)
//
const calcInfoArr = ["-v", "--version", "-h", "--help"];
const calcOps = ["add", "sub", "mult", "div"];

for(var i=0; i<process.argv.length; i++){
  if (process.argv[i] === "-v" || process.argv[i] === "--version" ){
    console.log("Calculator version is: 1.0.0");
  }
  else if (process.argv[i] === "-h"|| process.argv[i] === "--help"){
    console.log("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  }
  //console.log(`${index}: ${val}`);
}
