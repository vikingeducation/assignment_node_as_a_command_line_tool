var cp = require('child_process')

var command = cp.spawn('ps', ['aux'])

command.stdout.on('data', (data) => {
  console.log(`these should be the processes: ${data}`)
})

command.stderr.on()
