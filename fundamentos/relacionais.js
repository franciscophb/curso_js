console.log('01)', '1' == 1)// == operador relacional que comprara se são iguais
console.log('02)', '1' === 1)//=== é estritamente igual? igual igual igual
console.log('03)', '3' != 3)//!=  é diferente
console.log('04)', '3' !== 3)//!== é estritamente diferente

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)//marco zero 01 janeiro 1970
const d2 = new Date(0)
console.log('09)', d1 === d2)//como estão comparando referência de memoria será falso nos dois casos
console.log('10)', d1 == d2)
console.log('11)', d1.getTime()===d2.getTime())
console.log('11)', d1.getTime()==d2.getTime())//aqui estou coparamdo um number em milisegundos
console.log('12)', undefined == null)//
console.log('11)', undefined === null)