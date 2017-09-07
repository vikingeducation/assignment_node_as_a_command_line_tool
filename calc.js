
const packageJSON = require()

process.stdin.resume();
process.setEncoding('utf8');

process.stdin.on('data', function(data){

  data = data.trim();

  mapUserInput(data);

})

//map user input
function mapUserInput(data) {

  switch (data) {
    case 'q':
    case 'quit':
    case 'exit':
      console.log('okay bye, happy calculating');
      process.stdin.pause();
      break;
    case '-h':
    case '--help':
      printHelp();
      break;
    case '-v':
    case '--version'
      console.log(`Calculator Version ${packageJSON.version}`);
      break;
    default:
      

  }

}

//parse inputs function


//printHelp
