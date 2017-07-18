/*
How will you map user input to JavaScript functions?
How will you properly pass arguments to subcommands to the appropriate function?
How will you enable subcommand chaining?
How will you allow options like -h and -v and their aliases --help and --version to output the correct information?
Once you've fully pseudocoded your approach in comments commit!
Now let's get coding
Calculator Info

Enable your calculator to output its version number when passed the option -v or --version
Enable your calculator to output helpful info about how to use the calculator when passed the option -h or --help
Verify that these both work
Commit!*/

/*
$ node calc.js add 5 5
#=> 10
$ node calc.js add 5 5 sub 3
#=> 7
$ node calc.js -v
$ node calc.js --version
#=> 1.0
$ node calc.js -h
$ node calc.js --help
#=> Explanation of how to use the calculator....*/
//add 5 5 sub 3 divide 2 ......

//take arguments

//parse args into commmands
  //syntax for input : [command ] variable amount of numbers ...[command ] variable amount of numbers
  //add 5 5 sub 3 divide 2 ...... = args
  //['add 5 5', 'sub 3', 'divide 2']
  //args, take off first element = command
    //run that grab the next
  //

//skip first command

//search for command
//findIndex => -1
//take the stuff before it and add into command array
//take is destructive

var args = process.argv.slice(2);
var operations = ['add', 'sub', 'mult', 'div'];

var interpret = (args) => {
  var result = 0

  //run operations
  while ( args.length != 0 ) {
    //"add 3 3 sub 0 div 1" = arg syntax
    var command = args[0];
    args.shift();

    //find our command arguments (the numbers )
    var index = -1; //index of next command
    var numbers;
    for (var i = 0; i < args.length; i++) {
      if ( operations.includes( args[i] ) ){
        //found the next command
        index = i;

        //grab our numbers for the next command
        numbers = args.slice( 0, index);
        args = args.splice(0, index);
        debugger;
        break;
      }
    }
    if ( index == -1 ){
      //if no other commands left
      numbers = args;
      args = '';
    }

    numbers = numbers.map( function( element ){
      return Number( element );
    })

    switch ( command ) {
      case 'add':
        //var out = args[1] + args[2]
        result += numbers.reduce(function(sum, value) {
          return sum + value;
        })
        break;
      case 'sub':
        result -= numbers.reduce(function(sum, value) {
          return sum - value;
        })
        break;
      case 'mult':
        result *= numbers.reduce(function(sum, value) {
          return sum * value;
        })
        break;
      case 'div':
        result /= numbers.reduce(function(sum, value) {
          return sum / value;
        })
        break;
      default:
        console.log('Error in switch!')
    }
    console.log( result );
  }

}
interpret( args );




/*//////////////////////////////////////////
    operations.forEach( function( element ){
      var l = args.findIndex( element );
      if ( l >= index ){
        //do nothing
      }else {
        index = l;
      }
    })


  // console.log(args);
    /*var find = function(){
      return
    }
    var next_command_index = args.forEach( function( element, index){
      if ( element == operations)
    })*/







//
