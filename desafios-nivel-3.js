//Questão 41 - Nível 3 ⭐⭐⭐
//Crie um sistema de calculadora com as seguintes funções: somar, subtrair, multiplicar, dividir e
// uma função principal calcular que receba dois números e uma operação (string) e use switch para chamar a
// função correspondente. Trate o caso de divisão por zero.
function calcular(numero1, numero2, funcao) {
  const tipoFuncao = funcao;

  switch (tipoFuncao) {
    case "somar":
      const soma = numero1 + numero2;
      console.log(`O resultado da soma é de ${soma}`);
      break;
    case "subtrair":
      const subtrai = numero1 - numero2;
      console.log(`O resultado da subtração é ${subtrai}`);
      break;
    case "multiplicar":
      const multi = numero1 * numero2;
      console.log(`O resultado da multiplicação é ${multi}`);
      break;
    case "dividir":
      const divide = numero1 / numero2;
      console.log(`O resultado da divisão é ${divide}`);
      break;
    default:
      console.log("Sua função não é valida!");
  }
}
calcular(25, 5, "multiplicar");

//Questão 42 - Nível 3 ⭐⭐⭐
//Crie uma função chamada analisarVendas que receba um array de objetos representando vendas
// (cada objeto com: produto, quantidade, valorUnitario). A função deve retornar um objeto com:
// totalVendas, produtoMaisVendido, valorTotalArrecadado e mediaValorPorVenda.

//Questão 43 - Nível 3 ⭐⭐⭐
//Crie um sistema de notas escolares com as seguintes funções:

//adicionarNota(aluno, nota): adiciona uma nota ao array de notas do aluno
//calcularMedia(aluno): calcula a média das notas
//verificarSituacao(aluno): retorna Aprovado/Recuperação/Reprovado
//gerarBoletim(aluno): retorna um objeto completo com nome, notas, média e situação
//Questão 44 - Nível 3 ⭐⭐⭐
//Crie uma função chamada simularEmprestimo que receba: valorEmprestimo, taxaJurosMensal e numeroParcelas. A função deve calcular o valor total a pagar com juros compostos e retornar um objeto detalhado com: valorOriginal, taxaJuros, parcelas, valorParcela, totalJuros e valorTotal.

//Questão 45 - Nível 3 ⭐⭐⭐
//Crie um mini sistema de e-commerce com:

//Um array de objetos produtos (nome, preco, estoque)
//Uma função adicionarAoCarrinho que verifica estoque
//Uma função calcularTotal que soma os valores do carrinho
//Uma função aplicarCupom que aplica desconto se o cupom for válido
//Uma função finalizarCompra que atualiza o estoque e retorna o resumo
//Questão 46 - Nível 3 ⭐⭐⭐
//Crie uma função chamada validarCPF que receba uma string com 11 dígitos e faça validações básicas: todos os caracteres são números, não são todos iguais (ex: 11111111111). Retorne um objeto indicando se é potencialmente válido e quais validações passaram/falharam.

//Questão 47 - Nível 3 ⭐⭐⭐
//Crie um sistema de avaliação de filmes com:

//Um array de objetos filmes (titulo, genero, notas[])
//Uma função para adicionar avaliação
//Uma função para calcular média de um filme
//Uma função para listar filmes por gênero
//Uma função para retornar o filme melhor avaliado
//Questão 48 - Nível 3 ⭐⭐⭐
//Crie uma função chamada converterMoeda que receba: valor, moedaOrigem e moedaDestino. Use um objeto com as taxas de conversão (BRL, USD, EUR) e implemente a conversão entre qualquer par de moedas. Trate casos de moedas inválidas.

//Questão 49 - Nível 3 ⭐⭐⭐
//Crie um sistema de gestão de tarefas com:

//Um array de objetos tarefas (id, descricao, prioridade, concluida)
//Função para adicionar tarefa
//Função para marcar como concluída
//Função para filtrar por prioridade ("alta", "media", "baixa")
//Função para gerar relatório (total, concluídas, pendentes por prioridade)
//Questão 50 - Nível 3 ⭐⭐⭐
//Crie uma função chamada analisarTexto que receba uma string e retorne um objeto com: numeroCaracteres, numeroPalavras, numeroFrases (separadas por . ! ?), palavraMaisLonga e mediaCaracteresPorPalavra.

//Questão 51 - Nível 3 ⭐⭐⭐
//Crie um sistema de reserva de hotel com:

//Um objeto hotel com quartos disponíveis (array de objetos com numero, tipo, precoDiaria, disponivel)
//Função para verificar disponibilidade por tipo
//Função para calcular valor da estadia (dias * precoDiaria)
//Função para aplicar desconto por temporada ("alta" +20%, "baixa" -15%)
//Função para fazer reserva (atualiza disponibilidade e retorna confirmação)
//Questão 52 - Nível 3 ⭐⭐⭐
//Crie uma função chamada calcularFrete que receba: peso, dimensoes (objeto com altura, largura, comprimento), distancia e tipoEntrega ("normal", "expressa"). Calcule o frete considerando: peso volumétrico (AxLxC/5000), use o maior entre peso real e volumétrico, aplique taxa por km e adicional para entrega expressa.

//Questão 53 - Nível 3 ⭐⭐⭐
//Crie um sistema de quiz com:

//Um array de objetos perguntas (pergunta, opcoes[], respostaCorreta)
//Uma função para verificar resposta
//Uma função para calcular pontuação final
//Uma função para gerar feedback (excelente >= 80%, bom >= 60%, regular >= 40%, insuficiente < 40%)
//Uma função para mostrar gabarito com respostas do usuário
//Questão 54 - Nível 3 ⭐⭐⭐
//Crie um sistema de controle de estoque com:

//Um array de objetos produtos (codigo, nome, quantidade, precoCompra, precoVenda)
//Função para adicionar produto
//Função para registrar entrada (aumenta quantidade)
//Função para registrar saída (diminui quantidade, verifica mínimo)
//Função para calcular lucro potencial do estoque
//Função para listar produtos abaixo do estoque mínimo
//Questão 55 - Nível 3 ⭐⭐⭐
//Crie uma função chamada gerarSenhaSegura que receba o tamanho desejado e opções (objeto com: incluirMaiusculas, incluirMinusculas, incluirNumeros, incluirSimbolos). A função deve gerar uma senha aleatória respeitando as opções e retornar a senha junto com uma avaliação de força ("fraca", "média", "forte").

//Questão 56 - Nível 3 ⭐⭐⭐
//Crie um sistema de agendamento com:

//Um array de objetos horarios (data, hora, disponivel, cliente)
//Função para verificar disponibilidade em uma data
//Função para agendar (marca como indisponível e registra cliente)
//Função para cancelar (libera horário)
//Função para listar agenda do dia
//Função para contar agendamentos por período
//Questão 57 - Nível 3 ⭐⭐⭐
//Crie uma função chamada calcularInvestimento que simule um investimento com:

//Parâmetros: valorInicial, aporteMensal, taxaMensal, meses
//Calcule mês a mês o rendimento (juros compostos + aportes)
//Retorne: valorFinal, totalInvestido, totalRendimentos, rentabilidadePercentual
//Inclua um array com a evolução mês a mês
//Questão 58 - Nível 3 ⭐⭐⭐
//Crie um sistema de cardápio de restaurante com:

//Um array de objetos itens (nome, categoria, preco, disponivel, ingredientes[])
//Função para filtrar por categoria
//Função para buscar por ingrediente (para alergias)
//Função para montar combo (entrada + prato + bebida com 10% desconto)
//Função para calcular conta de mesa (array de pedidos + taxa de serviço opcional)
//Questão 59 - Nível 3 ⭐⭐⭐
//Crie uma função chamada analisarDados que receba um array de números e retorne um objeto completo com estatísticas: quantidade, soma, media, maior, menor, amplitude, mediana (valor do meio quando ordenado) e verificação se há números repetidos.

//Questão 60 - Nível 3 ⭐⭐⭐
//Crie um sistema completo de biblioteca com:

//Arrays para livros (titulo, autor, isbn, disponivel) e emprestimos (livroIsbn, usuario, dataEmprestimo, dataDevolucao)
//Função para emprestar livro (verifica disponibilidade)
//Função para devolver livro (calcula multa se atrasado - R$1/dia)
//Função para buscar livros por autor ou título
//Função para listar empréstimos de um usuário
//Função para gerar relatório geral (livros disponíveis, emprestados, usuários com pendência)
