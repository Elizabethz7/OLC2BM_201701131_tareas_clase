const parser = require('./Grammar/Grammar');
console.time('loop');
const ast = parser.parse('10+20*70*80+23');
let resultado=ast.execute();
console.log(resultado.cd3);

console.timeEnd('loop');