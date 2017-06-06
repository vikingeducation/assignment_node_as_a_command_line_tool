const childProcess = require('child_process');


process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
    data = data.trim();

    if (data === 'q' || data === 'quit') {
        console.log('Exited');
        process.exit();
    }
    let spawnCmd = childProcess.spawn("echo", parseInput(data));
    spawnEvents(spawnCmd);


});


function parseInput(data) {
    return data.split(" ");
}


function spawnEvents(spawnCmd) {
    
     spawnCmd.stderr.on('data', (data) => {
        console.error(`SPAWN-Error: ${data}`)
    });

    spawnCmd.stdout.on('data', (data) => {
        console.log(`SPAWN-Output: ${data}`);
    })

    spawnCmd.on('close', (code) => {
        console.log(`SPAWN-Exit code: ${code} \n`);
    });
}