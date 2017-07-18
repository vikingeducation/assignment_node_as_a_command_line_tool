// Call corresponding function, passing arguments.
// Wrapper object for calculator.
module.exports = {
  _version: 1.0,
  _helpString:
    'Usage: node calc.js <cmd> <value> <value> [<cmd> <value>...]' +
    '\nAvailable commands:\n' +
    '--version (-v), --help (-h), add, sub, mult, div, pow, sqrt, log, exp',

  add: (left, right) => left + right,
  addHelp: 'Usage: add <number> <number> ...[add <number>]...',

  sub: (left, right) => left - right,
  subHelp: 'Usage: sub <number> <number> ...[sub <number>]...',

  mult: (left, right) => left * right,
  multHelp: 'Usage: mult <number> <number> ...[mult <number>]...',

  div: (left, right) => left / right,
  divHelp: 'Usage: div <number> <number> ...[div <number>]...',

  pow: (left, right) => left ** right,
  powHelp: 'Usage: pow <number> <number> ...[pow <number>]...',

  // Single-argument cases
  soloList: ['sqrt', 'log', 'exp'],

  sqrt: left => Math.sqrt(left),
  sqrtHelp: 'Usage: sqrt <number> ...[sqrt]...',

  log: left => Math.log(left),
  logHelp: 'Usage: log <number> ...[log]...',

  exp: left => Math.exp(left),
  expHelp: 'Usage: exp <number> ...[exp]...'
};
