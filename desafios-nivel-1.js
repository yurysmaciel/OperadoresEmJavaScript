// QUESTÃO 1
//Declare três variáveis usando let: nome (seu nome), idade (sua idade) e cidade (sua cidade).
// Em seguida, exiba no console uma frase no formato: "Meu nome é [nome], tenho [idade] anos e moro em [cidade]."
let nome = "Yury";
let idade = 20;
let cidade = "Fortaleza/CE";

const frase1 = `Olá meu nome é ${nome} tenho ${idade} anos e moro em ${cidade}!`;
console.log(frase1);

// QUESTÃO 2
//Crie uma variável para cada tipo primitivo do JavaScript (String, Number, Boolean, Undefined, Null)
// e use typeof para exibir o tipo de cada uma no console.
let tipo1 = "Isso é string";
let tipo2 = 2;
let tipo3 = true;
let tipo4;
let tipo5 = null; //Null ira retornar object no console, isso é devido a um erro historico do javascript

console.log(typeof tipo1);
console.log(typeof tipo2);
console.log(typeof tipo3);
console.log(typeof tipo4);
console.log(typeof tipo5); //Null ira retornar object no console, isso é devido a um erro historico do javascript

// QUESTÃO 3
//Crie duas variáveis numéricas a e b com valores de sua escolha.
// Calcule e exiba no console: a soma, a subtração, a multiplicação, a divisão e o resto da divisão entre elas.
let a = 50;
let b = 20;

const soma = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;
const restoDivisao = a % b;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(restoDivisao);

// QUESTÃO 4
//Crie uma função chamada saudacao que receba um nome como parâmetro e retorne a string "Olá, [nome]! Bem-vindo(a)!".
function saudacao(nome) {
  return `Olá, ${nome}! Bem-vindo(a)!`;
}

console.log(saudacao("Yury"));

//QUESTÃO 5 - Nível 1 ⭐
//Escreva um código que verifique se o número 15 é maior que 10. Use if/else para exibir "Maior que 10" ou "Menor ou igual a 10".
function verificarNumero() {
  let number = 15;
  if (number > 10) {
    return "Maior que 10";
  } else {
    return "Menor ou igual a 10";
  }
}
console.log(verificarNumero());

//QUESTÃO 6 - Nível 1 ⭐
//Crie uma função chamada dobrar que receba um número como parâmetro e retorne o dobro desse número.
function dobrar(n1) {
  let dobroDeN1 = n1 * 2;
  return dobroDeN1;
}
console.log(dobrar(10));

//QUESTÃO 7 - Nível 1 ⭐
//Declare um array chamado frutas com 5 frutas de sua escolha. Exiba no console a primeira e a última fruta do array.
let frutas = ["maçá", "banana", "uva", "goiaba", "Laranja"];
console.log("A frutas número 1 é", frutas[0], "e a ultima fruta é", frutas[4]);

//QUESTÃO 8 - Nível 1 ⭐
//Crie um objeto chamado pessoa com as propriedades: nome, idade e profissao. Exiba cada propriedade no console.
const pessoa = {
  nome: "Yury",
  idade: 20,
  profissao: "Programador Full-Stack",
};
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);

//QUESTÃO 9 - Nível 1 ⭐
//Use o operador ternário para verificar se uma variável numero (valor 7) é par ou ímpar. Armazene o resultado ("Par" ou "Ímpar") em uma variável e exiba no console.

let numero1 = 7;
const resultado = numero1 % 2 === 0 ? "Par" : "Ímpar";

console.log(resultado);

//QUESTÃO 10 - Nível 1 ⭐
//Crie uma função usando Arrow Function chamada quadrado que receba um número e retorne seu quadrado (número elevado a 2).
let functionArrow = (numero) => numero * numero;
console.log(functionArrow(4));

//QUESTÃO 11 - Nível 1 ⭐
//Declare duas variáveis booleanas temCarteira e maiorDeIdade. Use os operadores lógicos para verificar se a pessoa pode dirigir (ambas devem ser true).
function permisaoDirigir() {
  let temCarteira = true;
  let maiorDeIdade = true;
  if (temCarteira && maiorDeIdade) {
    return "Você pode dirigir!";
  } else {
    return "Você não pode dirigir!";
  }
}
console.log(permisaoDirigir());

//QUESTÃO 12 - Nível 1 ⭐
//Crie uma função chamada somar que receba dois números como parâmetros e retorne a soma deles.
function somar(num1, num2) {
  return num1 + num2;
}
console.log(somar(5, 8));

//QUESTÃO 13 - Nível 1 ⭐
//Escreva um código usando switch que receba um número de 1 a 7 e exiba o dia da semana correspondente (1 = Domingo, 2 = Segunda, etc.).
const diaSemana = 3;
switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Número inválido. Digite um valor entre 1 e 7.");
}

//QUESTÃO 14 - Nível 1 ⭐
//Crie uma constante chamada pi com o valor 3.14159 e uma função que calcule a área de um círculo dado o raio (Área = PI * raio²).
const pi = 3.14159;

function calcularAreaCirculo(raio) {
  const area = pi * raio ** 2;
  return `A área do círculo é ${area}`;
}
console.log(calcularAreaCirculo(8));

//QUESTÃO 15 - Nível 1 ⭐
//Verifique se a string "JavaScript" é igual a "javascript" usando == e ===. Exiba os resultados e explique a diferença em um comentário.
let string1 = "JavaScript";
let string2 = "javascript";

const comparar1 = string1 == string2; // Os 2 == irão verificar os valores dentro da string, e devido ao J e S maiusculos ira dar diferença com o j e s minusculos assim retornando False
const comparar2 = string1 === string2; // Os 3 === irão verificar os valores e o tipo, apesar do tipo ser o mesmo "String" os valores ainda estarão diferentes assim retornando False
console.log(comparar1);
console.log(comparar2);

//QUESTÃO 16 - Nível 1 ⭐
//Crie uma função chamada ehPositivo que receba um número e retorne true se for positivo ou false se for negativo ou zero.
function ehPositivo(number1) {
  if (number1 > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(ehPositivo(5));

//QUESTÃO 17 - Nível 1 ⭐
//Declare uma variável temperatura com valor 25. Use if/else para exibir "Está quente" se for maior que 30, ou "Está agradável" caso contrário.
let temperatura = 25;
function verificarTemperatura(temp) {
  if (temp > 30) {
    return "Está quente";
  } else {
    return "Está agradável";
  }
}
console.log(verificarTemperatura(temperatura));

//QUESTÃO 18 - Nível 1 ⭐
//Crie uma função anônima armazenada em uma constante chamada subtrair que receba dois números e retorne a subtração do primeiro pelo segundo.
const subtrair = function (numero1, numero2) {
  return numero1 - numero2;
};
console.log(subtrair(5, 2));

//QUESTÃO 19 - Nível 1 ⭐
//Crie um array chamado notas com 4 valores numéricos. Acesse e exiba no console o segundo e o terceiro elemento do array.
let notas = [10, 5.5, 6, 8];
console.log(notas[1]);
console.log(notas[2]);

//QUESTÃO 20 - Nível 1 ⭐
//Escreva uma função chamada apresentar que receba nome e idade como parâmetros e retorne: "Me chamo [nome] e tenho [idade] anos."
function apresentar(nome, idade) {
  return `Me chamo ${nome} e tenho ${idade} anos.`;
}
console.log(apresentar("Yury", 20));
