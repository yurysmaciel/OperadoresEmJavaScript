const pessoa = {
    nome: "yury",
    idade: 18,
    trabalha: true,
    altura: 1.75,

    apresentacao() {
        console.log(`Olá meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos`)// no lugar de pessoa posso utilizar this
    }
};

const pessoa2 = {
    nome: "Maria",
    idade: 18,
    trabalha: true,
    altura: 1.70,

    apresentacao() {
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos`)
    },

    fazerAniversario() {
        this.idade++
    }
};


//Acessar o valor da propriedade em um objeto
console.log(pessoa.altura);
console.log(pessoa.nome);

// criando nova propriedade

pessoa.cargo = "empresario"

// editando propriedade

pessoa.idade = 21;

// excluir propriedade

delete pessoa.trabalha;

pessoa.apresentacao();
pessoa2.apresentacao();
pessoa2.fazerAniversario();
console.log(pessoa2)

// Exercicio caixa eletronico:

const caixaEletronico = {
    saldo: 1000,

    verificarSaldo() {
        console.log(this.saldo)
    },

    depositar(valorDeposito) {
        this.saldo += valorDeposito
        return this.saldo
    },

    saque(valorSaque) {
        if(valorSaque > this.saldo){
             console.log("Saldo insuficiente!!!")
        }else {
           return this.saldo = this.saldo - valorSaque
        }
    }
}

caixaEletronico.verificarSaldo()

console.log(caixaEletronico.depositar(500))
console.log(caixaEletronico.saque(200))

//classes (Class)
class ContaBancaria {
    constructor(cliente, cpf, saldo, tipo, agencia, conta) {
        this.cliente = cliente,
        this.cpf = cpf,
        this.saldo = saldo,
        this.tipo = tipo,
        this.agencia = agencia,
        this.conta = conta;
    }

    saque(valorSaque) {
        if(valorSaque > this.saldo){
             console.log("Saldo insuficiente!!!")
        }else {
           return this.saldo = this.saldo - valorSaque
        }
    }

    depositar(valorDeposito) {
        this.saldo += valorDeposito
        return this.saldo
    }

    verificarSaldo() {
        console.log(this.saldo)
    }
}

const conta1 = new ContaBancaria(
    "Yury",
    "12345678910",
    1000,
    "Conta Polpança",
    "0926",
    "213754-7",
);
console.log(conta1)

//crie uma class Carro
class Carro {
    constructor(marca, modelo, hodometro, ligado,) {
        this.marca = marca,
        this.modelo = modelo,
        this.hodometro = hodometro,
        this.ligado = ligado;
    }

    ligarCarro() {
        if(this.ligado) {
            return "O carro já esta ligado"
        }else {
         this.ligado = true
        }
    }

    desligarCarro(){
        return this.ligado = false
    }

    dirigir(kmRodado){
        if(this.ligado === false){
            return "Seu carro esta desligado"
        }else {
            this.hodometro += kmRodado
            return `Você andou um total de ${this.hodometro}Km`
        }
    }
}

const carro1 = new Carro(
    "Corrola",
    "2020",
    17500,
    true,
)

console.log(carro1.desligarCarro())
console.log(carro1)

console.log(carro1.dirigir(500))

const carro2 = new Carro(
    "Civic",
    "2026",
    10000,
    true,
)

console.log(carro2.dirigir(1500))

const estoque = [
    {
        produto: "Leite Ninho",
        estoque: 20,
        preco: 30,
    },

    {
        produto: "PassaTempo",
        estoque: 10,
        preco: 3,
    },

    {
        produto: "Detergente",
        estoque: 13,
        preco: 7,
    },
]

// Crie uma class chamada Caixa
// Caixa tem o saldo, valorFinalCompra... venda(produto,quant)
// caixa informa o valor final da compra
//depois da compra tem que dar a saida do produto no estoque

class Caixa {
    constructor(saldo) {
        this.saldo = saldo
        this.valorFinalCompra = 0;
    }

    venda(produto, quant) {
        const item = estoque.find((item) => item.produto === produto);
        if(!item) {
            return "Produto não encontrado no estoque"
        }
        if (item.estoque < quant) {
            return "Estoque insuficiente";
        }

        const valorCompra = item.preco * quant;
        this.valorFinalCompra += valorCompra;
        item.estoque -= quant;
        this.saldo += valorCompra;

        return `Venda relizada ${quant} x ${produto} | Valor da compra: R$${valorCompra},|
         Novo saldo do caixa: R$${this.saldo}`
    }
}

const caixaLoja = new Caixa(200);
console.log(caixaLoja.venda("Leite Ninho", 2))
console.log(caixaLoja.venda("Passatempo", 5))
console.log(caixaLoja.venda("Detergente", 15))
