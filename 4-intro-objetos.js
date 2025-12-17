//introdução a objetos( {} )

const aluno = {
    nome: "Maria",
    matricula: 1234567,
    turma: "B",
    ano: 3,
}

console.log(aluno.nome)

const pessoa = {
    nome: "Alex",
    idade: 20,
    temCarro: true,
    casado: false,
    coresFavoritas: ["verde", "preto", "azul"],
    carro: {
        modelo: "corolla",
        ano: 2022,
        itens: ["direção eletrica", "cvt", "banco de couro"],
    }
};

console.log(pessoa)
console.log(pessoa.temCarro)
console.log(aluno.nome === pessoa.nome) //false

console.log(pessoa.coresFavoritas[2]);

console.log(pessoa.carro.modelo);

console.log(pessoa.carro.ano);

console.log(pessoa.carro.itens[1]);

//desafio: crie uma variavel chamado frase, e coloque uma string
//"Eu tenho um carro com câmbio [cvt]" - use template string

let frase = `Eu tenho um carro ${pessoa.carro.modelo} com câmbio ${pessoa.carro.itens[1]}`
console.log(frase)

//Substituindo valores em um objeto
pessoa.carro.ano = 2025

//adicionando AR nos itens
pessoa.carro.itens[3] = "ar"

//deletando uma propriedade
delete pessoa.casado;


pessoa.profissao = "programador";
