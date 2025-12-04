let umaString = "Um \"texto\"";  // dessa forma aparece Um "texto"
console.log(umaString);
umaString="nando"
console.log(umaString[4]);//exibe letra O

console.log(umaString.indexOf("nando"));//nando começa no indice zero 
console.log(umaString.replace(/n/,'#'));//aqui ele troca a letra n pelo #
console.log(umaString.replace(/n/g,'#'));//aqui ele troca todas as letras n pelo #
console.log(umaString.length);// mostra o tamanho da string, tem tamanho 5 e começa do indice zero e vai ate o quatro.

console.log(umaString.slice(2, 4));//exibe nd, de nando, ele corta a string.

console.log(umaString.slice(-1));//exibe 'o', de nando, ele corta a string e exibe o tamanho total da string menos 1 que é o ultimo caracter.

umaString="teste de escrita";
console.log(umaString.split(' '));//ele tira todos espaços da string, e exibe as palavras que sobraram.

console.log(umaString.split(' ',1));//ele exibe a string ate encontrar o primeiro ESPAÇO

//SITE DO W3 SCHOOLS, VER TUDO QUE SE PODE FAZER COM STRINGS.