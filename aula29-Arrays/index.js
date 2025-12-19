/*const alunos = ['luiz', 'maria', 'joão', 'ana',123, true, 'carlos'];*/
//mas não é uma boa prática misturar tipos diferentes em um array
//as strings são indexadas por elementos numéricos começando do 0
const alunos = ['luiz', 'maria', 'joão', 'ana'];
console.log(alunos[0]);//exibe o primeiro elemento do array 
alunos[5] = 'carlos';//adiciona um novo elemento na posição 5 

alunos.push('fabiana');//adiciona um novo elemento na última posição do array

alunos.unshift('paulo');//adiciona um novo elemento na primeira posição do array
alunos.pop();//remove o último elemento do array

const removido = alunos.pop();//remove o último elemento do array e armazena na variável removido
//const removido = alunos.shift();//remove o primeiro elemento do array e armazena na variável removido
//delete alunos[1];//remove o elemento da posição 1, mas mantém o índice
console.log(alunos.slice(0, 3));//exibe os elementos do array do índice 0 ao 2 (o 3 não é incluído)
console.log(alunos.slice(0, -1));//exibe os elementos do array do índice 0 até o penúltimo elemento

console.log(typeof alunos);//exibe o tipo do array (object)
console.log(alunos instanceof Array);//verifica se alunos é uma instância de Array (true)