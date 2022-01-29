const nome = 'Enderson';
const sobrenome = 'Barcelos';

const idade = 18;
const peso = 65;
const alturaEmM = 2.0;

let imc = peso / (alturaEmM + alturaEmM);

let anoNascimento = 2021 - idade;

console.log(`${nome} ${sobrenome} tem a ${idade} anos, pesa ${peso} Kg`);
console.log(`Tem ${alturaEmM} de altura e seu IMC ${imc}`);
console.log(`${nome} ${sobrenome} nasceu no ano ${anoNascimento}`);
