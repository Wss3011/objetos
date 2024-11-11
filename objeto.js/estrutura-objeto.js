const estudante = {
    nome: 'José Silva',
    idade: 32,
    CPF: '12312312312',
    turma: 'JavaScript'
}

console.log(estudante.nome);
console.log(`O nome desse estudante é ${estudante.nome}`);
console.log(`os três primeiros digítos do cpf é ${estudante.CPF.substring(0, 3)}`);
