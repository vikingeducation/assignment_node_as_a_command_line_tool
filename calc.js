const fs = require('fs');
var cp = require('child_process')

process.stdin.resume();
process.stdin.setEncoding('utf8');

var total;

process.stdin.on('data', (str) => {
  total = undefined
  str = str.trim();
  newArr = str.toString().split(" ");
  // console.log(newArr)

  if (str[0] === '-'){
    dashCheck(str);
  }
  else {
    doMath(newArr)
  }

})


function dashCheck(input) {
  var newInput = input.split('-').join('')
  if (newInput[0] === 'v'){
    console.log(process.version)
  } else {
    console.log('something about helping')
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
    default:
      console.log("that's not how you do math")
  }
}

function addition(arr){
  for (var i=0; i<arr.length; i++){
    if (isNaN(arr[i])){
      doMath(arr.slice(i))
      return
    } else {
      if (total === undefined){
        total = arr[i]
      } else {
        total += parseInt(arr[i])
      }
    }
  }
  console.log(total)
}

function subtraction(arr){
  for (var i=0; i<arr.length; i++){
    if (isNaN(arr[i])){
      doMath(arr.slice(i))
      return
    } else {
      if (total === undefined){
        total = arr[i]
      } else {
        total -= parseInt(arr[i])
      }
    }
  }
  console.log(total)
}

function multiplication(arr){
  for (var i=0; i<arr.length; i++){
    if (isNaN(arr[i])){
      doMath(arr.slice(i))
      return
    } else {
      if (total === undefined){
        total = arr[i]
      } else {
        total *= parseInt(arr[i])
      }
    }
  }
  console.log(total)
}


function division(arr){
  for (var i=0; i<arr.length; i++){
    if (isNaN(arr[i])){
      doMath(arr.slice(i))
      return
    } else {
      if (total === undefined){
        total = arr[i]
      } else {
        total /= parseInt(arr[i])
      }
    }
  }
  console.log(total)
}
