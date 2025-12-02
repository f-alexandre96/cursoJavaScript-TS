/*
Fernando Alexandre da Silva tem 29 Anos, pesa 70 kg, tem 1.8 de altura e seu IMC é de 19.87
 */
const nome = 'Fernando Alexandre';
const sobrenome = 'Silva';
const idade = 29;
const peso = 68;
const altura = 1.85;
let imc; //peso/ altura x altura
let anoNascimento;

imc= peso / (altura*altura);
console.log(imc);
anoNascimento = 2025 - idade;
console.log(anoNascimento);

//template strings
console.log(`${nome} ${sobrenome} pode ser um ótimo dev `)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);