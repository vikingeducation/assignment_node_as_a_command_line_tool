var calcFunc={
  add: args=>args[0]+args[1],

  sub: args=>args[0]-args[1],

  mul: args=>args[0]*args[1],

  div: args=>args[0]/args[1],

  pow: args=>args[0]**args[1],

  '-v': (function(){
    return "Version 1.0";
  }),
  '-h': (function(){
    return "Example: node calc.js add 5 5 sub 3 will give you 7";
  }),
  '--help': (function(){
    return calcFunc['-h']();
  }),
  '--version': (function(){
    return calcFunc['-v']();
  }),

  '-d': (function(){
    while (remainingArgs.length>0){
      let str = remainingArgs[0];
      let i=1;
      while (!isNaN(remainingArgs[i])){
        str +=" "+remainingArgs[i];
        i++;
      }
      str+=" => "
      executeNextCommand();
      str+=currentValue;
      console.log(str);
    }
    console.log("finished");
    return currentValue;
  })
}

/*
if (process.argv[2] == '--debug' || process.argv[2] == '-d'){
  var command=process.argv[3];
  var args= process.argv.slice(4);
  var str1 = command + ' ' + args[0] + ' ' + args[1] + ' => '
  var currentValue=calcFunc[command](args[0],args[1]);
  console.log(str1 + currentValue);

  if (process.argv.length>6){
    let i=6
    while (i<process.argv.length){
      let command=process.argv[i];
      let arg = process.argv[i+1];
      var str = command + ' ' + currentValue + ' ' + arg + ' => '
      currentValue=calcFunc[command](currentValue, arg);
      console.log(str + currentValue);
      i+=2
    }
  }
  //console.log(currentValue);
}
else{
  var command=process.argv[2];
  var args= process.argv.slice(3);
  var currentValue=calcFunc[command](args[0],args[1]);
  if (process.argv.length>5){
    let i=5
    while (i<process.argv.length){
      let command=process.argv[i];
      let arg = process.argv[i+1];
      currentValue=calcFunc[command](currentValue, arg);
      i+=2
    }
  }

  console.log(currentValue);
}


*/


function executeNextCommand(){
  let cmd = remainingArgs[0];
  let currentArgs=[];
  if (currentValue){
    currentArgs.push(currentValue);
  }
  remainingArgs=remainingArgs.slice(1);


  while (!isNaN(remainingArgs[0])){
    currentArgs.push(remainingArgs[0]);
    remainingArgs=remainingArgs.slice(1);
  }
  currentValue=calcFunc[cmd](currentArgs);
}

var remainingArgs=process.argv.slice(2);
for (let i=0; i<remainingArgs.length; i++){
  if (!isNaN(remainingArgs[i])){
    remainingArgs[i]=Number(remainingArgs[i]);
  }
}

var currentValue;
let cmd = remainingArgs[0];
let currentArgs=[];
remainingArgs=remainingArgs.slice(1);


while (!isNaN(remainingArgs[0])){
  currentArgs.push(remainingArgs[0]);
  remainingArgs=remainingArgs.slice(1);
}

currentValue=calcFunc[cmd](currentArgs);

while (remainingArgs.length>0){
  executeNextCommand();
}




console.log(currentValue);