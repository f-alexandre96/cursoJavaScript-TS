//ler sobre MAth no w3 schools
//https://www.w3schools.com/js/js_math.asp
/*
let num1 = 9.54578;
let num2 =  Math.floor(num1); //arredonda para baixo
console.log(num2);
num2 =  Math.ceil(num1); //arredonda para cima
console.log(num2);
let num3 =  Math.round(num1); //arredonda para o mais próximo
console.log(num3); 
console.log(Math.max(1,2,3,4,5,6,7,8,9,10,-50,150,25)); //retorna o maior número
console.log(Math.min(1,2,3,4,5,6,7,8,9,10,-50,150,25)); //retorna o menor número*/
const aleatorio = Math.random(); //número aleatório entre 0 e 1
/*
const aleatorioEntre10 = aleatorio * 10; //número aleatório entre 0 e 10
*/
const aleatorioEntre10e20 = aleatorio * (20 - 10) + 10; //número aleatório entre 10 e 20
console.log(aleatorioEntre10e20);
const aleatorioEntre50e100 = Math.round(Math.random() * (100 - 50) + 50); //número aleatório entre 50 e 100 arredondado
console.log(aleatorioEntre50e100);
/* const pi = Math.PI; //retorna o valor de PI
math.pow(x,y) //retorna o valor de x elevado a y ou (2**10) tbm funciona.
math.sqrt(x) //retorna a raiz quadrada de x ou (x**(1/2)) ou x** 0.5 tbm funciona.
------------------------------
aqui no JS é possivel dividir números por 0, o resultado será INFINITY, diferente de outras linguagens que retornam erro.
quanto mais proximo de 0, maior o número retornado, por exemplo: 100/0.00000000001 = 10000000000000*/ 