function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 //operador ou || paip duas vezes
    const comprarTv50 = trabalho1 && trabalho2//operador e && sifrão duas vezes
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)//bitwiser xor
    const comprarTv32 = trabalho1 != trabalho2//operador de diferença simula um ou exclusivo
    const manterSaudavel = !comprarSorvete//negação logica operador unario

    return{comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    //JavaScript cria automaticamente um objeto com chave e valor igual ao declarado acima
    //ao inves de ter que escrever isso:
    //return {comprarSorvete: comprarSorvete,....}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))
