var operation = process.argv.slice(2)
var usingOperator = false
var currentFunc = ''
var argList = []

var operationBank = {
  add: function(arr) {
    return arr[0] + arr[1]
  },
  
  sub: function(arr) {
    return arr[0] - arr[1]
  },
  
  div: function(arr) {
    return arr[0] / arr[1]
  },
  
  mult: function(arr) {
    return arr[0] * arr[1]
  },
  
  '-h': function(arr) {
    console.log('Polish Notation Calculator ya dummy!')
    process.exit()
  },
  
  '-v': function(arr) {
    console.log('Version 1.0')
    process.exit()
  }
}

operation.forEach((input, index) => {
  if (usingOperator) {
    argList.push(Number(input))
  } else {
    currentFunc = operationBank[input]
    usingOperator = true
  }
  
  if (argList.length == 2 || index === operation.length - 1) {
    currentTotal = currentFunc(argList)
    if (index === operation.length - 1) {
      console.log(currentTotal)
    } else {
      argList = [currentTotal]
      usingOperator = false
    }
  } 
})
