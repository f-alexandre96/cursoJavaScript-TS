//valores primitivos e por referência
//primitivos imutáveis - string, number, boolean, undefined, null, symbol, bigint - o valor em si
let a = 'fernando'; 
a[0]= 'V';
console.log(a); // não altera o valor de 'a', continua sendo 'fernando'

let b= "A";
let c = b; //copia o valor de b para c quando usa valor primitivo
console.log(b,c);

//valores por referência(mutável) - objetos - array, object, function - o valor é o endereço de memória
let d = [1,2,3];
let e = d;
// let e = [...d]; // para copiar arrays usa spread operator, aqui copia o valor de d para e
console.log(d,e);// ambos apontam para o mesmo array na memória

//valores primitivos são copiados, valores por referência apontam para o mesmo local na memória.
