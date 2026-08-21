//TIPO DE DADOS PRIMITIVOS.
const nome = 'fernando'; //string
const nome1="fernando"; //string
const nome2=`fernando`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; // undefined    ->não aponta pra lugar nenhum na memória
const sobrenomeAluno = null; // tbm não aponta pra local nenhum na memória
//quando usar o null, exemplo: se um usuario puder trocar a cor do plano de fundo, mas não fizer a troca, a variavel pode ficar com valor null.
const aprovado = false;


console.log(typeof nome,nome);
//agora um bug no JS
console.log(typeof sobrenomeAluno,sobrenomeAluno);// vai mostrar como tipo objeto apontando pra null, mas não é um objeto.

//QUANDO é passado valor por referencia,
//ex: array
let a = [1,2];
let b = a;
console.log(a,b);
b.push(3);
console.log(a,b);
//(2) [1, 2] (2) [1, 2]

//(3) [1, 2, 3] (3) [1, 2, 3]
// altera tudo porque foi passado por referencia, mas quando é usado tipos primitivos, ai não altera.
//SIGNIFICA QUE A,B APONTAM PRO MESMO LOCAL NA MEMÓRIA.
let c = 2;
let d = c; //aqui o valor foi copiado mesmo, não foi passado por referencia, porque sao tipos primitivos.
console.log(c,d);//2,2

c=3;
console.log(c,d);//3,2