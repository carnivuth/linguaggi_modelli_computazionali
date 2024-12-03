const readline = require('readline');
const lesect = require('./lesect.js')

// check sui parametri
if (process.argv.length!=3){console.error("wrong parameters"); process.exit(1)}

// approssimazione pessima, leggendo tutto l'stdin non si produce output, neanche parzialmente, portando a inutili occupazioni di ram :(
var lines = [];
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

rl.on('line', (line) => {
  lines.push(line);
});
rl.on('close', (line) => {
   lesect(lines,process.argv[2])(console.log)
});
