const readline = require('readline');
const lesect = require('./lesect.js')
const fs = require('node:fs');

// check sui parametri
if (process.argv.length<4){console.error("wrong parameters"); process.exit(1)}

try {
  const file = fs.readFileSync(process.argv[2], 'utf8');
  expr= Function("x",file)
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
    lesect(lines,process.argv[3])(expr)
  });

} catch (err) {
  process.exit(1)
}
