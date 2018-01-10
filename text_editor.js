process.stdin.on('data', function (str) {
  str = str.trim()
  if (str === 'q' || str === 'quit') {
    console.log('Goodbye.')
    process.exit()
  } else {
    console.log(str)
  }
})
