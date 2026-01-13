/*
function saudacao() {
    console.log('bom dia!');
}

saudacao(); // Chama a função para exibir a saudação no console
*/

function saudacao(nome) {
    console.log(`Bom dia, ${nome}!`);
}
saudacao('João'); // Chama a função com o nome 'João'
saudacao('Maria'); // Chama a função com o nome 'Maria'

function soma(x, y) { // se eu por soma(x = 1, y = 1) ele atribui valores padrão caso eu não passe nada
    const resultado = x + y;
    return resultado;
}
console.log(soma(3, 5)); // Exibe 8 no console

//-----------------------------
const raiz = function(n) {
    return n ** 0.5;
};
/* const raiz = (n) => {     esse sinal de => é a sintaxe de arrow function
    return n ** 0.5;
}; 
que tbm da pra fazer assim: const raiz = n => n ** 0.5; quando tem só um parâmetro e uma única expressão no corpo da função

*/
console.log(raiz(9)); // Exibe 3 no console
console.log(raiz(16)); // Exibe 4 no console

//-----------------------------
// não é interessante fazer uma função que faz varias coisas.