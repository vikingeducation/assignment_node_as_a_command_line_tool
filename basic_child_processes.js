let childProcess = require('child_process');

let spawnCmd = childProcess.spawn('ps', ['aux']);

spawnCmd.stderr.on('data', (data) => {
    console.error(`SPAWN-Error: ${data}`)
});

spawnCmd.stdout.on('data', (data) => {
    console.log(`SPAWN-Output: ${data}`);
})

spawnCmd.on('close', (code) => {
    console.log(`SPAWN-Exit code: ${code} \n`);
});


let execCmd = childProcess.exec('ps "aux"', (err, stdout, stderr) => {
    if(err) throw err;

    if(stderr){
        console.log(`EXEC-Error: ${stderr}`)
    }

    console.log(`EXEC-Output \n ${stdout}`)
});

execCmd.on('exit', (code) => {
    console.log(`EXEC-Exit Code: ${code}`);
})