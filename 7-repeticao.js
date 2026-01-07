// for ( variavel; condição; incremento) {}
for (let i = 1; i <= 5; i++) {
    //console.log(`Número: ${i}`);
}

//Utilizem o for para fazer a tabuada de 5 e 9
for (let multi = 0; multi <=9; multi++) {
    const operacao = 5 * multi; 
    console.log(`5 x ${multi} = ${operacao}`)
}

console.log("----------------")

for (let multi = 0; multi <=9; multi++) {
    const operacao = 9 * multi; 
    console.log(`9 x ${multi} = ${operacao}`)//Outra forma seria colocar a operação dentre o ${} eliminando o const
}

// crie uma functio tabuada que recebi a operação da tabuada, 
// ela printa no console qualquer tabuada.

function tabuada(numeroTabuada) {
    console.log(`tabuada de ${numeroTabuada}:`)
    for (let valorTabuada = 0; valorTabuada <=9; valorTabuada++) {
     console.log(`${numeroTabuada} x ${valorTabuada} = ${numeroTabuada * valorTabuada}`);
    }
}
tabuada(1)

const cestaDeFruta = ["banana", "uva", "morango", "abacaxi"];
for (let fruta = 0; fruta <= cestaDeFruta.length -1; fruta++) {
    console.log(cestaDeFruta[fruta])    
}
console.log("-----------------")
//cestaDeFruta[1] = "manga";

//substitua uva por manga iterando sobre o array utilizando FOR
for (let i = 0; i <= cestaDeFruta.length -1; i++) {
    if(cestaDeFruta[i] === "uva"){
        cestaDeFruta[i] = "manga";
    }
}
console.log(cestaDeFruta);

const estoque = [
  {
    marca: "Nike",
    preco: 300.0,
    quantidade: 30,
    tamanho: [37, 38, 39, 40],
  },
  {
    marca: "Adidas",
    preco: 450.0,
    quantidade: 20,
    tamanho: [37, 38, 39, 40],
  },
  {
    marca: "Puma",
    preco: 550.0,
    quantidade: 60,
    tamanho: [37, 38, 39, 40],
  },
  {
    marca: "Asics",
    preco: 299.0,
    quantidade: 70,
    tamanho: [37, 38, 39, 40],
  },
];

//utilize o FOR para ajustar esses dados!
//1- houve um erro no estoque e a quantidade de todos os tenis diminuiu em 10 tênis
//(reduza 10 unidades de cada tênis)
//2- o tenis nike teve reajuste de preço para R$400
//3- o Asiscs recebeu uma nova númeração(42)
for (let i = 0; i < estoque.length; i++) {
    estoque[i].quantidade = estoque[i].quantidade - 10;//outra forma de fazer é com estoque[i].quantidade -= 10

    if(estoque[i].marca === "Nike"){
        estoque[i].preco = 400.00
    }

    if (estoque[i].marca === "Asics"){
       estoque[i].tamanho[estoque.length] = 42;
    }
}

console.log(estoque)