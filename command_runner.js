process.stdin.on('data', function (str) {
  str = str.trim()
  if (str === 'q' || str === 'quit') {
    console.log('Goodbye.')
    process.exit()
  } else {
    console.log(str)
  }
})

var cp = require('child_process')

var cmd = cp.spawn('echo', ['Hello world!'])

cmd.on('error', (err) => {
  console.error(`${err.stack}`)
})

cmd.stdout.on('data', (data) => {
  console.log(`Data: ${data}`)
})

cmd.stderr.on('data', (data) => {
  console.error(`STDERR: ${data}`)
})

cmd.on('close', (code) => {
  console.log(`Child process exited with code: ${code}`)
})
