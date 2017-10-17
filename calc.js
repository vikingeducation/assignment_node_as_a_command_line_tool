// Version number and help
if (process.argv[2] === "-v" || process.argv[2] === "--version") {
  console.log("1.0");
} else if (process.argv[2] === "-h" || process.argv[2] === "--help") {
  console.log(`To use the calculator, enter an operator and two numbers
to perform the operation on. Subcommands can be performed by adding an
additional parameter and another number to be executed on the current total.`);
}
