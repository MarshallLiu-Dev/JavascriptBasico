/* how to increment a number with javascript?*/
   function getVal(val){

    var checkProductId =val;
    var g = checkProductId.replace(/[^0-9]/g, '');
    var q = Number(g); 
    var k=++q;  
    console.log(k);

    }

    getVal("CSS10");   //out put should be in console.log(k);   11
    getVal("CSS11");   //out put should be in console.log(k);   12




//Source: https://stackoverflow.com/questions/61948367


let myVaR = 87;
// Altere apenas o código abaixo desta linha
myVar = myVaR +1;
// respota
myVar++;

let myVar = 11;

// Altere apenas o código abaixo desta linha
myVar = myVar - 1;
myVar --;


const ourDecimal = 5.7;

// Altere apenas o código abaixo desta linha Crie a variável myDecimal e dê a ela um valor decimal com uma parte fracional (e.g. 5.7).

let myDecimal = 0.009;

// Multiplicar dois decimais com JavaScript
/*
const product = 2.0 * 0.0;
Altere o 0.0 para que o produto seja igual a 5.0.

*/
const product = 2.0 * 2.5;

console.log(product);

//Dividir um decimal por outro com JavaScript

/*
Modifique 0.0 para que a variável quotient seja igual a 2.2.
Aprovado:A variável quotient deve ser igual a 2.2
Aprovado:Você deve usar o operador / para dividir 4.4 por 2
Aprovado:A variável quotient deve ser atribuída apenas uma vez */

//const quotient = 0.0 / 2.0; // Altere esta linha

const quotient = 4.4 / 2.0; // Altere esta linha

//Descobrir o resto em JavaScript

/*O operador de resto % retorna o resto da divisão de dois números.

Exemplo

5 % 2 = 1 porque
Math.floor(5 / 2) = 2 (Quociente)
2 * 2 = 4
5 - 4 = 1 (Resto)
Uso
Na matemática, um número pode ser verificado como par ou ímpar por meio do resto da divisão do número por 2.

17 % 2 = 1 (17 é Ímpar)
48 % 2 = 0 (48 é Par)
Observação: o operador de resto às vezes é referido incorretamente como o operador de módulo. É muito semelhante ao módulo, mas não funciona adequadamente com números negativos.

Define o resto igual ao restante de 11 dividido por 3 usando o operador de restante (%). */

var remainder = 11 % 3;

//Atribuir de modo composto com adição aumentada

/*Na programação, é comum usar atribuições para modificar o conteúdo de uma variável. Lembre-se de que tudo à direita do sinal de igual é avaliado primeiro, para que possamos dizer:

myVar = myVar + 5;
para adicionar 5 a myVar. Como este é um padrão tão comum, existem operadores que realizam uma operação matemática e atribuição em um passo.

Um desses operadores é o operador +=.

let myVar = 1;
myVar += 5;
console.log(myVar);
6 seria exibido no console.

Converta as atribuições para a, b e c para usar o operador +=.

let a = 3;
let b = 17;
let c = 12;

// Altere apenas o código abaixo desta linha

a = a + 12;
b = 9 + b;
c = c + 7;
*/

a += 12;
b += 9
c += 7;

//Atribuir de modo composto com subtração aumentada

/*Como o operador +=, -= subtrai um número de uma variável.

myVar = myVar - 5;
vai subtrair 5 de myVar. Essa expressão pode ser reescrita assim:

myVar -= 5;
Converta as atribuições para a, b e c para usar o operador +=. */


let a = 11;
let b = 9;
let c = 3;

// Altere apenas o código abaixo desta linha
a = a - 6;
b = b - 15;
c = c - 1;

//resposta 

a -= 6;
b -= 15;
c -= 1;


//Atribuir de modo composto com multiplicação aumentada


/*O operador *= multiplica uma variável por um número.

myVar = myVar * 5;
multiplicará myVar por 5. Essa expressão pode ser reescrita assim:

myVar *= 5;
Converta as atribuições para a, b e c para usar o operador *=.*/

let a = 5;
let b = 12;
let c = 4.6;

// Altere apenas o código abaixo desta linha
a = a * 5;
b = 3 * b;
c = c * 10;

// resposta

a *= 5;
b *= 3;
c *= 10;


//Atribuir de modo composto com divisão aumentada

/* O operador /= divide uma variável por outro número.

myVar = myVar / 5;
dividirá myVar por 5. Essa expressão pode ser reescrita assim:

myVar /= 5;
Converta as atribuições para a, b e c para usar o operador /=.*/

let a = 48;
let b = 108;
let c = 33;

// Altere apenas o código abaixo desta linha
a = a / 12;
b = b / 4;
c = c / 11;

//Resposta 

a /= 12;
b /= 4;
c /= 11;

//Escapar aspas literais em strings

/* Quando você estiver definindo uma sequência de caracteres você deve iniciar e terminar com uma aspa simples ou dupla. O que acontece quando você precisa de uma aspa literal: " ou ' dentro de sua string?

Em JavaScript, você pode escapar uma aspa para que não seja considerada como o fim de uma string ao colocar a barra invertida (\) na frente da aspa.

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
Isso sinaliza ao JavaScript que a aspa seguinte não é o fim de uma string, mas que deve aparecer dentro da string. Então, se você fosse imprimir isso no console, você obteria:

Alan said, "Peter is learning JavaScript".
Use barras invertidas para atribuir a string à variável myStr para que, se você fosse imprimi-la no console, veria:

I am a "double quoted" string inside "double quotes".*/

const myStr = ""; // Altere esta linha

//Resposta 
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";// Altere esta linha


//Cercar uma string com aspas simples

/*Valores de string em JavaScript podem ser escritas com aspas simples ou duplas, desde que você comece e termine com o mesmo tipo de aspas. Diferente de outras linguagens de programação, aspas simples e duplas funcionam da mesma forma em JavaScript.

const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
O motivo pelo qual você pode querer usar um tipo de aspas no lugar da outra é se você vir a querer usar ambas em uma string. Isso pode acontecer se você quiser salvar uma conversa em uma string e ter a conversa entre aspas. Outro uso para isso seria salvar uma tag <a> com vários atributos em aspas, tudo dentro de uma string.

const conversation = 'Finn exclaims to Jake, "Algebraic!"';
Porém, isso se torna um problema se você precisar usar as aspas mais extremas dentro dela. Lembre-se, uma string tem o mesmo tipo de aspas no início e no final. Mas se você tem aquela mesma aspa em algum lugar no meio, a string vai terminar mais cedo e lançará um erro.

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
Aqui badStr lançará um erro.

Na string goodStr acima, você pode usar ambas as aspas com segurança ao usar a barra invertida \ como um caractere de escapamento.

Observação: a barra invertida \ não deve ser confundida com a barra comum /. Elas não fazem a mesma coisa. */

const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

//Resposta

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';


//Escapar sequências em strings

/* Aspas não são os únicos caracteres que podem ser escapados dentro de uma string. Há dois motivos para usar caracteres de escapamento:

Para permitir que você use caracteres que você pode não ser capaz de digitar do contrário, como o caractere de nova linha.
Para permitir que você represente várias aspas em uma string sem o JavaScript entender erroneamente o que você quis dizer.
Aprendemos isso no desafio anterior.

Código	Saída
\'	aspas simples
\"	aspas duplas
\\	barra invertida
\n	nova linha
\t	tab
\r	retorno de carro
\b	limite de palavra
\f	quebra de página
Note que a própria barra invertida deve ser escapada para ser exibida como uma barra invertida.

Atribua as três linhas de texto a seguir em uma única variável myStr usando sequências de escapamento.

FirstLine
    \SecondLine
ThirdLine
Você precisará usar sequências de escapamento para inserir corretamente os caracteres especiais. Você também precisará seguir os espaçamentos assim como acima, sem espaços entre sequências de escapamento ou palavras.

Observação: a identação para SecondLine é alcançada com o caractere de espaçamento tab, e não com espaços. */

const myStr = ""; // Altere esta linha

//Resposta 

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Altere esta linha

//Concatenar strings com o operador mais

/*
Em JavaScript, quando o operador + é usado com um valor de String, ele é chamado de operador de concatenação. Você pode criar uma nova string a partir de outras strings ao concatenar elas juntos.

Exemplo

'My name is Alan,' + ' I concatenate.'
Observação: cuidado com os espaços. A concatenação não adiciona espaços entre strings concatenadas, então você mesmo precisará adicioná-las.

Exemplo:

const ourStr = "I come first. " + "I come second.";
A string I come first. I come second. seria exibida no console.

Crie myStr a partir das strings This is the start. e This is the end. usando o operador +. Não se esqueça de incluir um espaço entre as duas strings.*/

const myStr = ""; // Altere esta linha

//Resposta 

const myStr = "This is the start. " + "This is the end."; // Altere esta linha

//Concatenar strings com o operador mais igual

/* Também podemos usar o operador += para concatenar uma string no final de uma variável string existente. Isso pode ser muito útil para quebrar uma longa string em várias linhas.

Observação: cuidado com os espaços. A concatenação não adiciona espaços entre strings concatenadas, então você mesmo precisará adicioná-los.

Exemplo:

let ourStr = "I come first. ";
ourStr += "I come second.";
ourStr agora deve ter como valor a string I come first. I come second..

Crie myStr em várias linhas concatenando essas duas strings: This is the first sentence. e This is the second sentence. usando o operador +=. Use o operador += de modo semelhante a como ele é mostrado no exemplo e certifique-se de incluir um espaço entre as duas strings. Comece atribuindo o primeiro texto para myStr, e então adicione o segundo texto.

 */

let myStr;

//Resposta 

var myStr = "This is the first sentence. "
myStr += "This is the second sentence."

//Criar strings com variáveis

/* Às vezes, você precisará criar uma string. Usando o operador de concatenação (+), você pode inserir uma ou mais variáveis em uma string que você está criando.

Exemplo:

const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
ourStr teria o valor da string Hello, our name is freeCodeCamp, how are you?.

Defina myName para uma string igual ao seu nome e construa myStr com myName em duas strings: My name is e and I am well! */

// Altere apenas o código abaixo desta linha
const myName = "";
const myStr = "";

//Resposta 

var myName = "Beau";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr)


//Adicionar variáveis para strings

/*Assim como podemos construir uma string em várias linhas através das strings literais, nós também podemos adicionar as variáveis para a string usando o operador mais igual (+=).

Exemplo:

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
ourStr teria o valor freeCodeCamp is awesome!.

Defina someAdjective para uma string de pelo menos 3 caracteres e adicione para myStr usando o operador +=.*/

// Altere o código abaixo desta linha
const someAdjective = "";
let myStr = "Learning to code is ";

//Resposta 

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;

//Encontrar o tamanho de uma string

/*Você pode encontrar o tamanho de um valor de String ao escrever .length após a variável de string ou literal de string.

console.log("Alan Peter".length);
O valor 10 seria exibido no console. Observe que o caractere de espaço entre "Alan" e "Peter" também é contado.

Por exemplo, se nós criássemos uma variável const firstName = "Ada", poderíamos descobrir qual o tamanho da string Ada usando a propriedade firstName.length.

Use a propriedade .length para definir lastNameLength como o número de caracteres em lastName.
*/


// Configuração
let lastNameLength = 0;
const lastName = "Lovelace";

// Altere apenas o código abaixo desta linha
lastNameLength = lastName;

//Resposta 

lastNameLength = lastName.length;
console.log(lastNameLength)


//Usar notação de colchetes para encontrar o primeiro caractere em uma string

/*Notação de colchetes é uma forma de pegar um caractere no índice especificado dentro de uma string.

A maioria das linguagens de programação modernas, como JavaScript, não começa contando do 1 como humanos fazem. Elas começam no 0. Isso é referido como indexação baseada em zero.

Por exemplo, o caractere no índice 0 da palavra Charles é C. Então, se const firstName = "Charles", você pode pegar o valor da primeira letra da string usando firstName[0].

Exemplo:

const firstName = "Charles";
const firstLetter = firstName[0];
firstLetter teria o valor da string C.

Use notação de colchetes para encontrar o primeiro caractere na variável lastName e atribua a letra para a variável firstLetterOfLastName.

Dica: tente olhar o exemplo acima se você ficar travado. */

// Configuração
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Altere apenas o código abaixo desta linha
firstLetterOfLastName = lastName; // Altere esta linha

//resposta 
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName)




