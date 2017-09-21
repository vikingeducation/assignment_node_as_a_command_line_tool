console.log("welcome to milind's calculator")
const commands = process.argv.slice(2);

const version = 'version 1.0.0'
const help = 'you can add, sub, mult, div, pow, sqrt. you can chain commands'

if (commands[0] === '-v' || commands[0] === '--version'){
  console.log(version)
  return
} else if (commands[0] === '-h' || commands[0] === '--help'){
  console.log(help)
  return

}

let counter = 0
let total = calculate(commands[counter], commands.slice(1,3))
console.log(total)
counter += 3
while (counter < commands.length){
  total = calculate(commands[counter], parseInt(commands[counter + 1]), total)
  console.log(total)
  counter += 2
}
console.log(`final output ${total}`)

function calculate(operator, args, out){
  if (args.length === 2) {
    let output = parseInt(args[0])
    if(operator === 'add') {
      output += parseInt(args[1])
      return output
    } else if (operator === 'sub'){
        output -= parseInt( args[1])
        return output
    } else if (operator === 'div'){
        output /= parseInt(args[1])
        return output
    } else if (operator === 'mult'){
        output *= parseInt(args[1])
        return output
    }
  } else {
    if(operator === 'add') {
      out += args
      return out
    } else if (operator === 'sub'){
        out -= args
        return out
    } else if (operator === 'div'){
        out /= args
        return out
    } else if (operator === 'mult'){
        out *= args
        return out
    }
  }
}
let operator = commands[0]
