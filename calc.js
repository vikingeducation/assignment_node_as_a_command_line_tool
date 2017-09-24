const args = process.argv;
const operation = args[2];
const a = parseInt(args[3]);
const b = parseInt(args[4]);


let total = 0;

switch (operation) {
  case 'add':
    total = a + b;
    process.stdout.write(total.toString() + '\n');
    break;
  case 'sub':
    total = a - b;
    process.stdout.write(total.toString() + '\n');
    break;
  case 'div':
    total = a / b;
    process.stdout.write(total.toString() + '\n');
    break;
  case 'mult':
    total = a * b;
    process.stdout.write(total.toString() + '\n');
    break;
  default:
    process.stdout.write('Please try again!' + '\n');
}
