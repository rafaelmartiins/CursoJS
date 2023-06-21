/*
Rafael Martins tem 26 anos, pesa 66 kg
tem 1.7 de altura e seu IMC é de 22.837370242214536
Rafael Martins nasceu em 1997
*/

const nome = 'Rafael';
const sobrenome = 'Martins';
const idade = 26;
const peso = 66;
const altura = 1.7;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (altura * altura);
anoNascimento = 2023 - idade;


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
