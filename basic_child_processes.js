var cp = require('child_process');

var cmd = cp.exec('echo "ps"', (err, stdout, stderr) => {
    
    if(err) {
        throw err;
        }
    if (stderr){
        console.error(`STDERR: ${ stderr}`);
    }
     console.log(`STDOUT: ${ stdout}`);
    });

    cmd.on('exit',(code)=>{
        console.log(`Exit code: ${code}`);
        
    })


