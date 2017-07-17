


process.stdin.resume();

process.stdin.setEncoding('utf8');

process.stdin.on('data', (str) => {
  str = str.trim();

  if (str === 'q') {
    process.exit;
  } else {
    console.log(str)
  }
})
