//operadores de comparação

const numero1 = 15;
const numero2 = 40;
const numero3 = 70;
const numero4 = 10;

const comparacao1 = numero1 < numero2; //true
const comparacao2 = numero3 > numero4; //true
const comparacao3 = 10 <= 3; //false
const comparacao4 = 2 >= 0; //true
const comparacao5 = 10 == 10; //true
const comparacao6 = 10 == "10"; //true
const comparacao7 = 20 === "20"; //false
const comparacao8 = 30 !== 30; //false 
const comparacao9 = "30" != 30; //false


console.log(comparacao1)
console.log(comparacao2)

//operadores lógicos (tabela verdade)
// e(&&) todos os comandos tem que dar true , ou(||) um dos comandos tem que dar true , 
// inverso(!) inverte os resultados

const situacao1 = 10 === 10 || 20 > 50; //true
const situacao2 = 30 !== 30 && 20 >= 20; //false
const situacao3 = !situacao1 || !situacao2; //true
const situacao4 = !(100 >= 10) && !(10 <= 100); //false

console.log(situacao1)
console.log(situacao2)