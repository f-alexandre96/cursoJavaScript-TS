let num1= 1500;
let num2 = 2.5;

console.log(num1 + num2);
console.log(num1.toString() + num2);//vai concatenar, mas o num1 não vai virar string, somente nessa linha será string.
//num1 = num1.toString();   //a variavel muda o valor de number para string mesmo.
console.log(num1.toString(2)); // Exibe o valor binário 

num1 = 10.651321847987561;
console.log(num1.toFixed(2)); //Vai mostrar o numero com duas casas decimais
num1=10.00;
console.log(Number.isInteger(num1)); //retorna um boolean 
num1 = parseFloat(num1.toFixed(2));// esse aqui resolve os problemas. e tbm da pra usar assim num1 = Number(num1.toFixed(2));

//----------------------------------
num1= 0.7;
num2= 0.1;

num1 += num2;
console.log(num1);

num1 += num2;
console.log(num1);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//tbm da pra fazer usando conta
num1= 0.7;
num2= 0.1;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
console.log(num1);
num1 = ((num1 * 100) + (num2 * 100)) / 100;
console.log(num1);
num1 = ((num1 * 100) + (num2 * 100)) / 100;
console.log(num1);

//O MAIS IMPORTANTE É num1= Number(num1.toFixed(2));
