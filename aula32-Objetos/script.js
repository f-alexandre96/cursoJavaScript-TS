const array = [1,2,3];
array.push(4);
array[0] = 10;
console.log(array);
// O código acima funciona porque, embora a referência do array seja constante, o conteúdo do array pode ser modificado.

//COLCHETES [] É UM ARRAY E CHAVES {} É UM OBJETO

const pessoa1 = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30
};

console.log(pessoa1.nome); // Acessando a propriedade 'nome' do objeto pessoa1

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
//quando tem valores iguais, pode simplificar
function criarPessoaSimplificado(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}
const pessoa2 = criarPessoa('Maria', 'Oliveira', 23); //Maria é um argumento passado para o parâmetro nome
const pessoa3 = criarPessoa('Mario', 'Oliveira', 24);
const pessoa4 = criarPessoa('Mari', 'Oliveira', 26);
const pessoa5 = criarPessoa('Marin', 'Oliveira', 27);
const pessoa6 = criarPessoa('Mariadoinga', 'Oliveira', 28);
// da pra usar metodos dentro de objetos
const pessoa7 = {
    nome: 'Ana',
    sobrenome: 'Souza',
    idade: 25,
    fala() {
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`);
    },
    aniversario() {
        this.idade++;
    }
};
pessoa7.fala();
pessoa7.aniversario();
pessoa7.fala();