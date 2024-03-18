# logica_de_programacao_js
Treinando a lógica de programação com JavaScript

## operadores_aritmeticos.js

~~~js
const numero1 = 40;
const numero2 = 20;
~~~

A palavra `const` é utilizada para declaração de variaveis que não vão ser reatribuidas (não permite reatribuição).

Aqui declaramos duas constantes que serão calculadas  no bloco a seguir
~~~js
console.log (`Os números das opreçôes são ${numero1} e ${numero2}`);
console.log (`A soma dos números é ${numero1 + numero2}`);
console.log (`A subtração dos números é ${subtracao}`);
console.log (`A multiplicação dos números é ${multiplicacao}`);
console.log (`A divisão dos números é ${divisao}`);
console.log (`O resto da divisão dos números é ${resto}`);
~~~

Em cada uma das opereções,temos um operador aritmético:

* `+` -> soma 
* `-` -> subtração
* `*` -> multiplicação
* `/` -> divisão
* `%` -> resto da divisão


## operadores_atribuicao.js

~~~js
let numero = 10
~~~

Declaramos a variavel `numero`usando a palavra `let`, pois essa variavel será  **reatribuída** ao longo do nosso código.

Em seguida, fazendo uma série de reatribuições usando os operadores de atribuição

~~~js
console.log (`O número é inicialmente igual a ${numero}`);
numero += 10;
console.log(`Após atribuir soamndo o número 10:${numero += 10}`);
console.log(`Reatribuindo e subtraindo 10: ${numero -= 10}`);
console.log(`Reatribuindo e multiplicando 10: ${numero *= 10} `);
console.log (`Reatribuindo e dividindo 10: ${numero /= 10}`);
console.log(`Restribuindo para o resto da divisão por 10: ${numero = numero %= 10}`);
console.log (`Incrementando o número em 1: ${++ numero}`);
console.log (`Decrementando o número em 1:${--numero}`);
console.log(`O número final é igual a: ${numero}`);
~~~

Operadores de atribuição

* `+=` -> atribuição com a soma 
* `-=` -> atribuição com subtração
* `*=` -> atribuição com multiplicação
* `/=` -> atribuição com divisão 
* `%=` -> atribuição com resto da divisão
* `++` -> atribuição com **incremento 1** (pode ser *pré ou *pós* incremento)
* `--` -> atribuição com **decremento 2** (pode ser *pré ou *pós* decremento)


## operadores_comparacao.js

Neste arquivo conhecemos os operadores de comparção e a estrutura lógica de decisão **if_else**

~~~js
if (condicao ) {
    console.log ('VERDADEIRO');
} else {
    console.log('FALSO');
}

~~~
 Esta estrutura exibe no console se a condição testada  é verdadeira  ou falsa. A condição armazena o resultado da comparação entre duas variaveis, como segue 
 ~~~js
 const a = a, == b;
 ~~~

 ### Operadores de comparação:

 // Operadores de comparação
// `==` é igual
// `!=` não é igual
// `>` maior que 
// `<` menor que
// `>=` maior OU igual
// `<=` menor OU igual
// `===` é estritamente igual (valor E tipo) 
// `!==` não é estritamente igual (valor OU tipo)


## desafio3.js

Crie um convertor de temperatura entre as escalas Celsius, Fahrenehit e kelvin.
O usuário deve digitar a temperaturan a ser convertida e a escala  da temperatura atuak e a escala paraa qual p valor deve ser convertido.

entradas: valor atual da temperatura, escala ataul da temperatura, escala para exibição (conversão).

formulas :

De | Para | Formula
---- |------|--------
Celsius |Fahrenheit |tF = (tC * 9/5)+ 32
Celsius |Kelvin | tk =tC + 273.15
Fahrenheit |Celsius| tC= (tF -32)* 5/9
Fahrenheit |Kelvin |tK = (tF = 459.67) * 5/9 
Kelvin | Celsius | tC -tK - 273.15
Kelvin |Fahrenheit |tF = (tK -273.15) * 9/5 - 459.67











