
var calcFunc={
  add: (function(a,b){
    a=Number(a);
    b=Number(b);
    return a+b;
  }),
  sub: (function(a,b){
    a=Number(a);
    b=Number(b);
    return a-b;
  }),
  mul: (function(a,b){
    a=Number(a);
    b=Number(b);
    return a*b;
  }),
  div: (function(a,b){
    a=Number(a);
    b=Number(b);
    return a/b;
  }),
  '-v': (function(){
    return "Version 1.0";
  }),
  '-h': (function(){
    return "Example: node calc.js add 5 5 sub 3 will give you 7";
  }),
  '--help': (function(){
    return "Example: node calc.js add 5 5 sub 3 will give you 7";
  }),
  '--version': (function(){
    return "Version 1.0";
  })
}


console.log(process.argv);

var command=process.argv[2];
var args= process.argv.slice(3);
var current_value=calcFunc[command](args[0],args[1]);
if (process.argv.length>5){
  let i=5
  while (i<process.argv.length){
    let command=process.argv[i];
    let arg = process.argv[i+1];
    current_value=calcFunc[command](current_value, arg);
    i+=2
  }
}

console.log(current_value);