// assuntos: funções nomeadas, funçoes anonimas, arrow function, return de função, escopo global / escopo bloco / escopo função

const frase1 = "Olá, meu nome é Rodrigo Medeiros";
const frase2 = "Olá, meu nome é João Silva";
const frase3 = "Olá, meu nome é Maria Tavares";
const frase4 = "Olá, meu nome é Mariana Feitosa";

//O que é função no JavaScript?
//Função é um bloco de código que pode ser executado e reutilizado várias vezes ao longo do código.
//Funções podem receber parâmetros de entrada e retornar valores de saída.

//1a forma: Funções nomeadas

function saudacao(nome, sobrenome) {
  console.log(`Olá, meu nome é ${nome} ${sobrenome}`);
  console.log(frase1);
  console.log(frase2);
  console.log(frase3);
  console.log(frase4);
  const qualquerCoisa = "blablabal";
}

//console.log(qualquerCoisa);

//executando a função saudacao()

saudacao("Tiago", "Alves");
// saudacao("Rodrigo", "Medeiros");
// saudacao("João", "Silva");
// saudacao("Maria", "Tavares");
// saudacao("Mariana", "Feitosa");

const soma1 = 10 + 30;
const soma2 = 30 + 30;
const soma3 = 300 + 200;
const soma4 = 100 + 500;

function somaDoisNumeros(numero1, numero2) {
  const result = numero1 + numero2;
  return result;
}

const resultado = somaDoisNumeros(200, 20) + 500;

console.log(resultado);

somaDoisNumeros(4235, 6345);

// crie uma função que multiplica três números:

function multiplicaTresNumeros(numero1, numero2, numero3) {
  console.log(numero1 * numero2 * numero3);
}

multiplicaTresNumeros(3, 5, 2);

// Você foi contratado para criar um programa para uma escola que calcula a média das notas dos alunos. Crie uma função que recebe duas notas e o nome do aluno, a função calcula a média do aluno. Mostre no console.

//"Nota do aluno Fulano : 7,5"

function mediaNotas(n1, n2, aluno) {
  const media = (n1 + n2) / 2;

  return `Nota do aluno(a) ${aluno} : ${media}`;
}

const mediaJoao = mediaNotas(8, 7, "João");

mediaNotas(3, 4, "Maria");
mediaNotas(10, 9, "Mariana");

// crie uma função que recebe duas medidas de um terreno. A função deve mostrar no console o perímetro do terreno em metros e a área do terreno em m2. Considere que o terreno seja um retangulo ou quadrado

function calculaAreaPerimetroTerreno(lado1, lado2) {
  const perimetro = (lado1 + lado2) * 2;
  const area = lado1 * lado2;

  console.log(`Perímetro do terreno: ${perimetro} m.`);
  console.log(`Área do terreno: ${area}m2`);
}

calculaAreaPerimetroTerreno(10, 20);
calculaAreaPerimetroTerreno(13, 25);
calculaAreaPerimetroTerreno(20, 50);

// Você foi contratado para criar um programa que calcula o volume de caixa d`agua em forma de cilindros. Crie uma função que recebe o raio da caixa dàgua em metros e o valor da altura da caixa d`água em metros. Exiba no console 3 diferentes caixas d`águas e seus respectivos volumes em m3. Considere Pi = 3.14

//Professor, como calcula o volume de um cilindro? Por gentileza, pesquise!

// 3.14 * (raio**2) * altura
// 3.14 * Math.pow(raio,2) * altura
calculaVolumaCaixaDagua(3, 6);
calculaVolumaCaixaDagua(2, 4);
calculaVolumaCaixaDagua(5, 10);

function calculaVolumaCaixaDagua(raio, altura) {
  const pi = 3.14;
  const volume = pi * raio * raio * altura;

  console.log(`Volume da caixa: ${volume}m3`);
}

calculaVolumaCaixaDagua(3, 6);
calculaVolumaCaixaDagua(2, 4);
calculaVolumaCaixaDagua(5, 10);

//2a forma : Funções anonimas

const subtraiDoisNumeros = function (num1, num2) {
  console.log(num1 - num2);
};

subtraiDoisNumeros(10, 2);

//3a forma : arrow function

const divideDoisNumeros = (num1, num2) => {
  console.log(num1 / num2);
};

divideDoisNumeros(30, 10);

//explicando return em funções:
function calculaIdade(anoNascimento) {
  const idade = 2025 - anoNascimento;

  return idade;

  console.log("FALA PESSOAL!");
}

const idadeRodrigo = calculaIdade(1990);
const idadeJoao = calculaIdade(1985);

console.log(idadeRodrigo);
console.log(idadeJoao);

//escopo de função/bloco e escopo global
