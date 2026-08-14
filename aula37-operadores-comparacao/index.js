/*
< menor
> maior
<= menor ou igual
>= maior ou igual
== igualdade (valor)    *EVITAR USAR, POIS PODE GERAR BUGS, POIS COMPARA VALORES DIFERENTES COMO IGUAIS
=== igualdade estrita (valor e tipo)
!= diferente (valor) *EVITAR USAR, POIS PODE GERAR BUGS, POIS COMPARA VALORES DIFERENTES COMO IGUAIS
!== diferente estrito(valor e tipo)

*/

const num1 = 10;
const num2 = 20;
const num = num1 < num2;
console.log(num);