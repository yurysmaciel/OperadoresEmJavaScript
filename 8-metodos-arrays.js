// arrays

const tecnologias = ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE.js"];
console.log(tecnologias);

//função constutora

const frutas = new Array("banana", "uva", "morango");
console.log(frutas);

console.log(frutas[frutas.length - 1]);
for (let i = 0; i < tecnologias.length; i++) {
  console.log(tecnologias[i]);
}

// Metodos de arrays

// push() - adiciona um item no final do array
frutas.push("manga");
frutas.push("abacaxi");
console.log(frutas);

// pop() - remove o ultimo item do array
tecnologias.pop();
console.log(tecnologias);

// unshift() - Adiciona o item no inicio do array
tecnologias.unshift("TailwindCSS");
console.log(tecnologias);

// shift() - Remove o item no inicio do array
tecnologias.shift();
tecnologias.shift();
console.log(tecnologias);

// splice- Adiciona, remove ou substitui elementos em uma posição específica
let palavras = [
  ["sim", "não"],
  ["positivo", "negativo"],
];
console.log(palavras[1][1]);

let letras = ["A", "B", "C", "D", "E"];
letras.splice(2, 1, "X", "Y", "Z", [1, 2, 3]);

console.log(letras);

// slice() - Retorna uma copia da parte do array sem modificar o array original
const carros = ["hilux", "civic", "corolla", "porsche", "hr-v"];

const doisCarros = carros.slice(2, 4);
console.log(doisCarros);

// Crie um array de objetos (um array de tenis - propriedades livre)
const tenis = [
  {
    marca: "Nike",
    tamanhos: [39, 40, 42],
  },
  {
    marca: "Adidas",
    tamanhos: [40, 41, 45],
  },
  {
    marca: "Mizuno",
    tamanhos: [40, 41, 42, 43, 44],
  },
  {
    marca: "Lacoste",
    tamanhos: [40, 42, 44],
  },
];
console.log(tenis);

console.log("1 - Adiciona um item no final");

tenis.push({
  marca: "Puma",
  tamanhos: [42, 45],
});
console.log(tenis);

console.log("2 - Remove o item no inicio");

tenis.shift();
console.log();

console.log("3 - Pega qualquer item no meio desse array e deleta");

tenis.splice(1, 1);
console.log(tenis);

console.log("4 - Substitui um  item no meio e adiciona 2 novos tenis");

tenis.splice(
  1,
  0,
  {
    marca: "Asics",
    tamanhos: [39, 40, 42],
  },
  {
    marca: "Olympicus",
    tamanhos: [39, 42, 45],
  },
);
console.log(tenis);

// map() - crie um novo array aplicando uma função em cada elemento
const meusNumeros = [2, 3, 4, 5, 6, 7];

const numerosDobrados = meusNumeros.map((item) => {
  return item * 2;
});
console.log(numerosDobrados);

// Exercicio
// triplique apenas os números pares usando map
// impar numero % 2 !== 0;
// par numero % 2 === 0;

const algunsNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const triploNumeros = algunsNumeros.map((item) => {
  if (item % 2 === 0) {
    return item * 3;
  } else if (item % 2 !== 0) {
    return item;
  }
});
console.log(triploNumeros);

// filter() - Retorna um novo array apenas com os elementos que atendem a uma condição
const outrosNumeros = [-10, -5, -4, -3, -2, 0, 1, 2, 4, 6];

const maioresQueDois = outrosNumeros.filter((item) => {
  return item > 2;
});

console.log(maioresQueDois);

// Retorne apenas os numeros pares e dobrados
const numerosParesDobrados = outrosNumeros
  .filter((item) => {
    return item % 2 === 0;
  })
  .map((item) => {
    return item * 2;
  });

console.log(numerosParesDobrados);

// find() - Retorne o primeiro elemento que satifaz a condição
let numeros1 = [10, 20, 30, 40, 50];

const encontrado = numeros1.find((item) => {
  return item > 30;
});
console.log(encontrado);
