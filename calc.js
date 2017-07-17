const fs = require('fs');
var cp = require('child_process')

process.stdin.setEncoding('utf8');
var debugOn = false;
var total;
//console.log(process.argv[0]);
function NonInteractive () {
  //total = undefined
  //str = str.trim();
  //newArr = str.toString().split(" ");
  var newArr = process.argv.slice(2);
  //console.log(newArr);

  // console.log(newArr)
  var tempStr = newArr[0]
  if (tempStr[0] === '-'){
    dashCheck(newArr);
  }
  else {
    doMath(newArr)
  }

}


function standardIn(){

  process.stdin.resume();
  process.stdin.setEncoding('utf8')

  process.stdin.on('data', (str) => {
    total = undefined
    str = str.trim();
    newArr = str.toString().split(" ");
    // newArr = process.argv.split(2);

    if (str[0] === '-'){
      dashCheck(str);
    }
    else {
      doMath(newArr)
    }
  })
}


//console.log(process.argv);
function dashCheck(input) {
  var newInput = input[0].split('-').join('');
  if (newInput[0] === 'v'){
    console.log(process.version)
  } else if (newInput[0] === 'h'){
    console.log('something about helping')
  } else if (newInput[0] === 'd'){
    debugOn = true;
    doMath(input.slice(1) );

  } else {
    standardIn();
  }
}

function doMath(arr){
  switch(arr[0]){
    case 'add':
      addition(arr.slice(1))
      break;
    case 'sub':
      subtraction(arr.slice(1))
      break;
    case 'div':
      division(arr.slice(1))
      break;
    case 'mult':
      multiplication(arr.slice(1))
      break;
    case 'pow':
      power(arr.slice(1))
      break;
    default:
      console.log("that's not how you do math")
  }
}

function addition(arr){
  for (var i=0; i<arr.length; i++){
    if (isNaN(arr[i])){
if(debugOn === true){
      console.log("Added " + arr.slice(0,i) + " new total " + total.toString());
    }
      doMath(arr.slice(i))
      return
    } else {
      if (total === undefined){
        total = parseInt(arr[i])
      } else {
        total += parseInt(arr[i])
      }
    }
  }
  if(debugOn === true){
        console.log("Added " + arr.slice(0,i));
        console.log("Total" + total.toString());
      }else{console.log(total);}
}

function subtraction(arr){
  for (var i=0; i<arr.length; i++){
    if (isNaN(arr[i])){
      if(debugOn === true){
      console.log("Subtracted " + arr.slice(0,i) + " new total " + total.toString());}
      doMath(arr.slice(i))


      return
    } else {
      if (total === undefined){
        total = parseInt(arr[i])
      } else {
        total -= parseInt(arr[i])
      }
    }
  }
  if(debugOn === true){
  console.log("Subtracted " + arr.slice(0,i));
  console.log("Total" + total.toString());
}
else{console.log(total);}

}

function multiplication(arr){
  for (var i=0; i<arr.length; i++){
    if (isNaN(arr[i])){
      if(debugOn === true){
        console.log("Multiplied " + arr.slice(0,i) + " new total " + total.toString());}
      doMath(arr.slice(i))
      return
    } else {
      if (total === undefined){
        total = parseInt(arr[i])
      } else {
        total *= parseInt(arr[i])
      }
    }
  }
  if(debugOn === true){
    console.log("Multiplied " + arr.slice(0,i));
console.log("Total" + total.toString());
  }else{console.log(total);}
}


function division(arr){
  for (var i=0; i<arr.length; i++){
    if (isNaN(arr[i])){
      if(debugOn === true){
        console.log("Divided " + arr.slice(0,i) + " new total " + total.toString());}
      doMath(arr.slice(i))
      return
    } else {
      if (total === undefined){
        total = parseInt(arr[i])
      } else {
        total /= parseInt(arr[i])
      }
    }
  }
  if(debugOn === true){
    console.log("Divided " + arr.slice(0,i));
console.log("Total" + total.toString());
  }else{console.log(total);}
}

function power(arr){
  for (var i=0; i<arr.length; i++){
    if (isNaN(arr[i])){
      if(debugOn === true){
        console.log("Divided " + arr.slice(0,i) + " new total " + total.toString());}
      doMath(arr.slice(i))
      return
    } else {
      if (total === undefined){
        if (isNaN(arr[i+1])) {
          doMath(arr.slice(i))
          return
        } else {
          total = Math.pow(parseInt(arr[i]), parseInt(arr[i+1]))
          i++
        }
      } else {
        total = Math.pow(parseInt(total), parseInt(arr[i]));
      }
    }
  }
  if(debugOn === true){
    console.log("Divided " + arr.slice(0,i));
console.log("Total" + total.toString());
  }else{console.log(total);}
}

function squareRoot(arr) {
  for (var i=0; i<arr.length; i++){
    if (isNaN(arr[i])){
      if(debugOn === true){
        console.log("Divided " + arr.slice(0,i) + " new total " + total.toString());}
      doMath(arr.slice(i))
      return
    } else {
      total += Math.sqrt(parseInt(arr[i]))
    }
  }
  if(debugOn === true){
    console.log("Divided " + arr.slice(0,i));
console.log("Total" + total.toString());
  }else{console.log(total);}
}

NonInteractive()
