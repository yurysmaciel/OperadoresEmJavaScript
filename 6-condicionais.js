function operacoesMatematicas(num1, num2, operacao) {
  if (operacao === "somar") {
    return num1 + num2;
  } else if (operacao === "subtrair") {
    return num1 - num2;
  } else if (operacao === "multiplicar") {
    return num1 * num2;
  } else if (operacao === "dividir") {
    return num1 / num2;
  } else {
    return "Digite uma operação matemática válida";
  }
}

function operacoesMatematicas2(num1, num2, operacao) {
  if (operacao === "somar") {
    return num1 + num2;
  }

  if (operacao === "subtrair") {
    return num1 - num2;
  }

  if (operacao === "multiplicar") {
    return num1 * num2;
  }

  if (operacao === "dividir") {
    return num1 / num2;
  }

  return "Digite uma operação matemática válida";
}

const result1 = operacoesMatematicas(10, 2, "somar");
const result2 = operacoesMatematicas(20, 10, "subtrair");
const result3 = operacoesMatematicas(30, 3, "multiplicar");
const result4 = operacoesMatematicas(30, 3, "limão");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

function verificaIdade(idade) {
  if (idade >= 18) {
    return "É maior de idade";
  } else {
    return "É menor de idade";
  }
}

const pessoa1 = verificaIdade(24);
const pessoa2 = verificaIdade(10);
const pessoa3 = verificaIdade(18);

console.log(pessoa1, pessoa2, pessoa3);

function festaAllBlack(corCamisa, corCalca) {
  if (corCamisa === "preto" && corCalca === "preto") {
    return "você pode entrar na festa";
  } else {
    return "você não pode entrar na festa";
  }
}

function verificaRoupa(convidadoCamisa, convidadoCalca) {
  const camisa = "preto" || "Preto" || "PRETO";
  const calca = "preto" || "Preto" || "PRETO";

  if (convidadoCamisa === camisa && convidadoCalca === calca) {
    return "você pode entrar na festa";
  } else {
    return "você não pode entrar na festa";
  }
}

const convidado1 = festaAllBlack("preto", "preto");
const convidado2 = festaAllBlack("preto", "azul");
const convidado3 = festaAllBlack("vermelha", "preto");

function verificaDiaSemana(dia) {
  const diaSemana = 5;

  switch (diaSemana) {
    case 1:
      return "Domingo";
    case 2:
      return "Segunda";
    case 3:
      return "Terça";
    case 4:
      return "Quarta";
    case 5:
      return "Quinta";
    case 6:
      return "Sexta";
    case 7:
      return "Sábado";
    default:
      return "Digite um dia válido de 1 a 7";
  }
}

const dia1 = verificaDiaSemana(2);
const dia2 = verificaDiaSemana(5);
const dia3 = verificaDiaSemana(6);

console.log(dia1);
console.log(dia2);
console.log(dia3);

const cor = "vermelho";

switch (cor) {
  case "azul":
    console.log("Cor é azul");
    break;
  case "roxo":
    console.log("Cor é roxo");
    break;

  case "verde":
    console.log("Cor é verde");
    break;

  case "vermelho":
    console.log("Cor é vermelho");
    break;

  case "marrom":
    console.log("Cor é marrom");
    break;

  case "rosa":
    console.log("Cor é rosa");
    break;

  default:
    console.log("caiu no default");
    break;
}
