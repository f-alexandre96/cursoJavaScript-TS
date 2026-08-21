/*ARITMETICOS
+ adição 
- subtração e concatenação
* multiplicação
/ divisão
** POTENCIAÇÃO ex: 2 elevado a 10.
% RESTO DA DIVISÃO, sempre que restar zero é pq o resultado é inteiro

-------------------------------------------------------------------------
precedencia -> a ordem que é feito
Parênteses ()
Potenciação / raízes ² ³ ^ 
Multiplicação e divisão × ÷ * /
Adição e subtração + -
-------------------------------------------------------------------------
let contador = 1;
contador ++   aqui o ++ vai incrementar 1.
-- decrementa
*/
const num1 = 10;
const num2 = parseFloat('3.2');
console.log(num1+num2);
console.log(typeof num2);
//parseInt() é a função que transforma string em numero inteiro
//se num1 virar string, o + vai CONCATENAR. unir 2 valores, fica 510
// O JEITO MAIS FACIL É USAR O Number() que ai o JS vai ver se é numero int ou float pra converter.

let contador = 1;
console.log(contador++);//aqui ele executa primeiro o console.log entao o valor vai mudar mas nao sera visivel.
console.log(++contador);//aqui ele primeiro incrementa e depois exibe o valor.

const passo = 10;
contador = contador + passo;// aqui ele incrementa 10
console.log(contador);
contador += passo; // aqui é o mesmo que na linha de cima, porém melhor.
console.log(contador);
//da pra usar assim tbm 
contador **= 2;
console.log(contador);
contador -=10;
console.log(contador);
//NaN significa not a number.

