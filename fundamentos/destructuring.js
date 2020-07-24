//novo recurso do ES2015

const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
//desestruturando dados
const { nome,idade } = pessoa //tire de  dentro do objeto o atributo nome e idade. De qual obejeto? pessoa
console.log(nome,idade)

const {nome: n, idade: i} = pessoa // tire de dentro do objeto o atributo idade e coloque na const n...
console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome,bemHumorada)

const {endereco:{logradouro,numero,cep} } = pessoa
console.log(logradouro, numero,cep)

const{endereco} = pessoa
console.log(endereco)