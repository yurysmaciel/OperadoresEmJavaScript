// Assuntos que já aprendemos:

/* Tipos de dados: -string,
Number, booleano, undefined, null */
// variações de string - aspas duplas, aspas simples,
// crase (template string)
// Criação de variaiveis - var, let e const
// Diferença do let e const
// Reatribuição de valores na variavel
// Operadores matematicos
// Operadores de comparação
// operadores lógicos (e, ou, inverso)
// Propriedades typeof
//assunto: introdução a arrays (listas)

const frutas = ["laranja", "morango", "manga", "uva"];

console.log(frutas)

console.log(frutas [1]) // Mostra somente 1 dos dados de dentro do array
console.log(frutas [3]);
console.log(frutas [0]);
console.log(frutas [4 - 2]);
console.log(frutas[0] === "banana");

const objeto = "dindin" || "geladinho";

const resultado = objeto === "dindin";

console.log(resultado);

//subistituir o valor no array

frutas[2] = "banana"
frutas[4] = "manga"
frutas[6] = "fruta do conde"
console.log(frutas)

//quantidade de itens de um array

console.log(frutas.length);

console.log(frutas[frutas.length - 1]);

