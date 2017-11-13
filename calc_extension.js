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
  pow: (function(a, b){
    a=Number(a);
    b=Number(b);
    return a**b;
  }),
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
  })
}

if (process.argv[2] == '--debug' || process.argv[2] == '-d'){
  var command=process.argv[3];
  var args= process.argv.slice(4);
  var str1 = command + ' ' + args[0] + ' ' + args[1] + ' => '
  var current_value=calcFunc[command](args[0],args[1]);
  console.log(str1 + current_value);

  if (process.argv.length>6){
    let i=6
    while (i<process.argv.length){
      let command=process.argv[i];
      let arg = process.argv[i+1];
      var str = command + ' ' + current_value + ' ' + arg + ' => '
      current_value=calcFunc[command](current_value, arg);
      console.log(str + current_value);
      i+=2
    }
  }
  //console.log(current_value);
}
else{
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
}
