const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

if (!fs.existsSync('./data')) {
  fs.mkdir('data');
}

const filename = `./data/${ process.argv[2] }`;

if (process.argv[2] && filename.length > 3 && filename.endsWith('.txt')) {

  process.stdin.on("data", (input) => {
    input = input.trim();

    if (input === '\\q') {
      process.exit();
    } else {
      fs.appendFile(filename, `${ input }\n`);
    }
  });

} else if (!process.argv[2]) {
  console.error('you must add a file to write to');
  process.exit();
} else {
  console.error('Filename must end in .txt');
  process.exit();
}
