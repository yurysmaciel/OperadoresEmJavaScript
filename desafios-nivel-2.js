//QUESTÃO 21 - Nível 2 ⭐⭐
//Crie uma função chamada calcularMedia que receba três notas como parâmetros e retorne a média aritmética. Em seguida, use uma estrutura condicional para exibir se o aluno está "Aprovado" (média >= 7),
// "Recuperação" (média entre 5 e 6.9) ou "Reprovado" (média < 5).
function calcularMedia(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  if (media >= 7) {
    return `Media ${media}: Aprovado!`;
  } else if (media >= 5) {
    return `Media ${media}: Recuperação`;
  } else {
    return `Media ${media}: Reprovado`;
  }
}
console.log(calcularMedia(7, 7, 7));

//QUESTÃO 22 - Nível 2 ⭐⭐
//Crie uma função chamada classificarIdade que receba uma idade como parâmetro e retorne:
// "Criança" (0-12), "Adolescente" (13-17), "Adulto" (18-59) ou "Idoso" (60+).
function classificarIdade(idade) {
  if (idade < 0) {
    return "Idade invalida";
  } else if (idade <= 12) {
    return "Criança";
  } else if (idade <= 17) {
    return "Adolescente";
  } else if (idade <= 59) {
    return "Adulto";
  } else if (idade >= 60) {
    return "Idoso";
  }
}
console.log(classificarIdade(12));
console.log(classificarIdade(17));
console.log(classificarIdade(25));
console.log(classificarIdade(65));

//QUESTÃO 23 - Nível 2 ⭐⭐
//Crie uma função chamada calcularIMC que receba peso (em kg) e altura (em metros) como parâmetros.
// A função deve calcular o IMC (peso / altura²) e retornar uma string indicando a classificação:
// "Abaixo do peso" (< 18.5), "Peso normal" (18.6-24.9), "Sobrepeso" (25-29.9) ou "Obesidade" (>= 30).
function calcularIMC(peso, altura) {
  const IMC = peso / altura ** 2;
  if (IMC < 18.5) {
    return "Abaixo do peso";
  } else if (IMC < 24.9) {
    return "Peso normal";
  } else if (IMC < 29.9) {
    return "Sobrepeso";
  } else {
    return "Obesidade";
  }
}
console.log(calcularIMC(70, 1.75));

//QUESTÃO 24 - Nível 2 ⭐⭐
//Crie uma função chamada calcularDesconto que receba o valor de um produto e a porcentagem de desconto.
// A função deve retornar o valor final com o desconto aplicado.
// Use o operador ternário para garantir que o desconto não seja maior que 50%.
function calcularDesconto(produtoValor, desconto) {
  const descontoAplicado = desconto < 50 ? desconto : 50;
  const descontoTotal = (produtoValor * descontoAplicado) / 100;
  const valorFinal = produtoValor - descontoTotal;
  return `O produto no valor de ${produtoValor} com o desconto de ${descontoAplicado} fica: ${valorFinal}`;
}
console.log(calcularDesconto(75, 50));

//QUESTÃO 25 - Nível 2 ⭐⭐
//Crie um objeto aluno com as propriedades: nome, nota1, nota2, nota3.
// Crie uma função que receba esse objeto e retorne a situação do aluno (Aprovado, Recuperação ou Reprovado)
// baseada na média das notas.
const aluno1 = {
  nome: "Yury",
  nota1: 7,
  nota2: 8,
  nota3: 10,
};

const aluno2 = {
  nome: "Maria",
  nota1: 10,
  nota2: 6,
  nota3: 8,
};

function mediaAluno(aluno) {
  let media1 = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;

  if (media1 < 5) {
    return "Reprovado";
  } else if (media1 < 7) {
    return "Recuperação";
  } else if (media1 >= 7) {
    return "Aprovado";
  }
}
console.log(mediaAluno(aluno1));
console.log(mediaAluno(aluno2));

//QUESTÃO 26 - Nível 2 ⭐⭐
//Crie uma função chamada verificarTriangulo que receba três lados como parâmetros e verifique se eles podem formar um triângulo
// (a soma de dois lados deve ser maior que o terceiro lado). Retorne true ou false.
function verificarTriangulo(lado1, lado2, lado3) {
  return (
    lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1
  );
}
console.log(verificarTriangulo(4, 4, 3));

//QUESTÃO 27 - Nível 2 ⭐⭐
//Crie uma função chamada converterTemperatura que receba uma temperatura e uma string
// indicando a escala atual ("C" para Celsius ou "F" para Fahrenheit).
// A função deve converter e retornar a temperatura na outra escala.
// Fórmulas: F = C _ 9/5 + 32 | C = (F - 32) _ 5/9
function converterTemperatura(numeroTemp, tipoTemp) {
  const fahrenheit = (numeroTemp * 9) / 5 + 32;
  const celsius = ((numeroTemp - 32) * 5) / 9;

  if (tipoTemp == "F") {
    return `Sua medida em Fahrenheit é ${celsius}`;
  } else if (tipoTemp == "C") {
    return `Sua medida em Fahrenheit é ${fahrenheit}`;
  }
}
console.log(converterTemperatura(122, "F"));

//QUESTÃO 28 - Nível 2 ⭐⭐
//Crie uma função chamada calcularPrecoFinal que receba o preço de
// um produto e o tipo de cliente ("comum", "associado" ou "vip").
// Use switch para aplicar descontos diferentes: comum (0%),
// associado (10%), vip (20%). Retorne o preço final.
function calcularPrecoFinal(precoProduto, tipoCliente) {
  let desconto = 0;

  switch (tipoCliente) {
    case "comum":
      desconto = 0;
      break;
    case "associado":
      desconto = 0.1;
      break;
    case "vip":
      desconto = 0.2;
      break;
    default:
      return "Tipo de cliente inválido!";
  }
  return precoProduto - precoProduto * desconto;
}
console.log(calcularPrecoFinal(75, "vip"));
//const precoFinal = precoProduto - valorDesconto;

//QUESTÃO 29 - Nível 2 ⭐⭐
//Crie uma função chamada verificarAnobissexto que receba um ano como
// parâmetro e retorne true se for bissexto ou false caso contrário.
// Um ano é bissexto se for divisível por 4,
// exceto anos divisíveis por 100,
// a menos que também sejam divisíveis por 400.
function verificarAnobissexto(ano) {
  if (ano % 400 === 0) {
    return true;
  }

  if (ano % 100 === 0) {
    return false;
  }

  return ano % 4 === 0;
}

console.log(verificarAnobissexto(1900));
console.log(verificarAnobissexto(2000));

//QUESTÃO 30 - Nível 2 ⭐⭐
//Crie uma função chamada calcularSalarioLiquido que receba o
// salário bruto. A função deve calcular o desconto de INSS (11%) e
// IR (15% se salário > 2000, senão 0%). Retorne um objeto com:
// salarioBruto, descontoINSS, descontoIR e salarioLiquido.
function calcularSalarioLiquido(salarioBruto) {
  const descontoINSS = salarioBruto * 0.11;
  let descontoIR = 0;

  if (salarioBruto > 2000) {
    descontoIR = salarioBruto * 0.15;
  }

  const salarioLiquido = salarioBruto - descontoINSS - descontoIR;

  return {
    salarioBruto,
    descontoINSS,
    descontoIR,
    salarioLiquido,
  };
}

console.log(calcularSalarioLiquido(3000));

//QUESTÃO 31 - Nível 2 ⭐⭐
//Crie uma função chamada maiorDeTres que receba três números como parâmetros e
// retorne o maior deles usando apenas estruturas condicionais (não use Math.max).
function maiorDeTres(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log(maiorDeTres(10, 11, 30));
//QUESTÃO 32 - Nível 2 ⭐⭐
//Crie uma função chamada calcularAreaForma que receba o tipo da forma
// ("circulo", "retangulo", "triangulo") e os parâmetros necessários. Use switch para calcular e
// retornar a área correspondente.
function calcularAreaForma(tipoForma, medida1, medida2) {
  const PI = Math.PI;

  switch (tipoForma) {
    case "circulo":
      return PI * medida1 ** 2;
    case "retangulo":
      return medida1 * medida2;
    case "triangulo":
      return (medida1 * medida2) / 2;
    default:
      return "Digite uma forma valida: circulo, retangulo ou triangulo!";
  }
}
console.log(calcularAreaForma("retangulo", 10, 5));

//QUESTÃO 33 - Nível 2 ⭐⭐
//Crie uma função verificarPalindromo que receba uma palavra e verifique se ela é um palíndromo (lê-se igual de trás para frente).
// Retorne true ou false. Dica: você pode converter a string para array, inverter e comparar.
function verificarPalindromo(palavra) {
  const arrayPalindromo = Array.from(palavra);
  const palavraAoContra = arrayPalindromo.reverse();
  const stringPalimdromo = palavraAoContra.join("");

  if (palavra === stringPalimdromo) {
    return true;
  } else {
    return false;
  }
}
console.log(verificarPalindromo("arara"));

//QUESTÃO 34 - Nível 2 ⭐⭐
//Crie uma função chamada calcularParcelas que receba o valor total de uma compra e o número de parcelas desejado.
// Se o número de parcelas for maior que 3, aplique juros de 2% por parcela adicional.
// Retorne um objeto com: valorTotal, numeroParcelas, juros e valorParcela.
function calcularParcelas(valorTotal, numeroParcelas) {
  let juros = 0;

  if (numeroParcelas > 3) {
    let percentualJuros = numeroParcelas * 0.02;
    juros = valorTotal * percentualJuros;
  }

  let valorComJuros = valorTotal + juros;
  let valorParcelas = valorComJuros / numeroParcelas;

  return {
    valorTotal,
    numeroParcelas,
    juros,
    valorParcelas,
  };
}
console.log(calcularParcelas(1000, 2));

//QUESTÃO 35 - Nível 2 ⭐⭐
//Crie uma função chamada classificarProduto que receba o preço de um produto e retorne sua categoria: "Econômico" (até R$50),
// "Intermediário" (R$50 a R$200), "Premium" (R$200 a R$500) ou "Luxo" (acima de R$500).
function classificarProduto(preco) {
  if (preco >= 500) {
    return "Luxo";
  } else if (preco < 500 && preco > 200) {
    return "Premium";
  } else if (preco <= 200 && preco > 50) {
    return "Intermediarío";
  } else if (preco <= 50) {
    return "Econômico";
  }
}
console.log(classificarProduto(500));

//QUESTÃO 36 - Nível 2 ⭐⭐
//Crie um objeto conta com as propriedades: titular, saldo e tipo ("corrente" ou "poupanca").
// Crie funções depositar, sacar e verificarSaldo que manipulem esse objeto. A função sacar deve verificar se há saldo suficiente.
const conta = {
  titular: "Yury",
  saldo: 1500,
  tipo: "corrente",
};
console.log(conta);

function depositar(obj, valorDeposito) {
  obj.saldo = obj.saldo + valorDeposito;
}
depositar(conta, 500);
console.log(conta);

function sacar(obj, valorSaque) {
  if (obj.saldo >= valorSaque) {
    return (obj.saldo = obj.saldo - valorSaque);
  } else if (obj.saldo < valorSaque) {
    return "Saldo insuficiente!";
  }
}
sacar(conta, 600);
console.log(conta);

function verificarSaldo(obj) {
  return obj.saldo;
}
verificarSaldo(conta);
console.log(verificarSaldo(conta));

//QUESTÃO 37 - Nível 2 ⭐⭐
//Crie uma função chamada calcularIdade que receba o ano de nascimento e retorne a idade da pessoa.
// Use uma condição para exibir também se a pessoa pode votar (>= 16 anos) e se o voto é obrigatório (>= 18 e <= 70 anos).
function calcularIdade(anoNascimento) {
  idade = 2026 - anoNascimento;

  if (idade >= 18 && idade <= 70) {
    return `Com ${idade} o seu voto é obrigatório!`;
  } else if (idade >= 16 && idade < 18) {
    return `Com ${idade} você pode votar!`;
  } else if (idade < 16) {
    return `Com ${idade} você ainda não pode votar!`;
  }
}
console.log(calcularIdade(1960));
//QUESTÃO 38 - Nível 2 ⭐⭐
//Crie uma função usando Arrow Function chamada ordenarNumeros que receba três números e retorne um array com eles ordenados do menor para o maior (sem usar o método sort).
const ordenarNumeros = (a, b, c) => {
  const menor = Math.min(a, b, c);
  const maior = Math.max(a, b, c);
  const meio = a + b + c - menor - maior;

  return [menor, meio, maior];
};
console.log(ordenarNumeros(30, 10, 80));

//QUESTÃO 39 - Nível 2 ⭐⭐
//Crie uma função chamada validarSenha que receba uma senha (string) e verifique se ela é válida.
// Uma senha válida deve ter: pelo menos 8 caracteres, pelo menos uma letra maiúscula e pelo menos um número.
// Retorne um objeto indicando se é válida e quais critérios falharam.
function validarSenha(senha) {
  let erros = [];

  if (senha.length < 8) {
    erros.push("Deve ter pelo menos 8 caracteres");
  }

  if (!/[A-Z]/.test(senha)) {
    erros.push("Deve conter pelo menos uma letra maiúscula");
  }

  if (!/[0-9]/.test(senha)) {
    erros.push("Deve conter pelo menos um número");
  }

  return {
    valida: erros.length === 0,
    erros: erros,
  };
}
console.log(validarSenha("Abc12345"));

//QUESTÃO 40 - Nível 2 ⭐⭐
//Crie uma função chamada calcularNotaFinal que receba um objeto com as notas de diferentes atividades (prova, trabalho, participacao)
// e seus respectivos pesos. Calcule a média ponderada e retorne a nota final junto com a situação do aluno.
const alunos = {
  notaProva: 10,
  pesoProva: 3,
  notaTrabalho: 6,
  pesoTrabalho: 2,
  notaParticipacao: 5,
  pesoParticipacao: 1,
};

function calcularNotaFinal(obj) {
  const mediaPondProva = obj.notaProva * obj.pesoProva;
  const mediaPondTrabalho = obj.notaTrabalho * obj.pesoTrabalho;
  const mediaPondParticipacao = obj.notaParticipacao * obj.pesoParticipacao;

  let mediaNota = mediaPondProva + mediaPondTrabalho + mediaPondParticipacao;
  let mediaPeso = obj.pesoProva + obj.pesoTrabalho + obj.pesoParticipacao;
  return mediaNota / mediaPeso;
}
console.log(calcularNotaFinal(alunos));
