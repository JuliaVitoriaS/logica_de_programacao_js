// Funções
// parametros de entradas
function somaDoisNumeros(num1, num2) {
    const soma = num1 + num2;
    return soma;
} 


const media = somaDoisNumeros(2,3) / 2;
const media2 = somaDoisNumeros (56, 3) / 3;

console.log 



// função CalculoIMC//


function calculaIMC() {
    const
     peso = window.prompt('Digite seu peso:'),
     altura = window.prompt('Digite sua altura:'),
     imc = peso / altura ** 2;
     
 if (imc < 18.5) {
     window.alert(`IMC: ${imc.toFixed(1)} --> Abaixo do peso`);
 
 } else if (imc < 25) {
     window.alert(`IMC: ${imc.toFixed(1)} --> Peso normal`);
 
 } else if (imc < 30) {
     window.alert(`IMC: ${imc.toFixed(1)} --> Sobrepeso`);
 
 } else if (imc < 35) {
     window.alert(`IMC: ${imc.toFixed(1)} --> Obesidade grau I`);
 
 } else if (imc < 40) {
     window.alert(`IMC: ${imc.toFixed(1)} --> Obesidade grau II`);
 
 } else {
     window.alert(`IMC: ${imc.toFixed(1)} --> Obesidade grau III`);
 }
 }








 //Função  Converter temperaturas 
// Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve digitar a temperatura a ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

//Entradas (3): valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão).

//Fórmulas:
//t°F = (t°C * 9/5) + 32
//t°C = (t°F - 32) * 5/9
//tK = 

const temperatura = parseFloat(window.prompt('digite a numeração da temperatura'));
    
      
const CF = (temperatura * 9/5) + 32,
      CK = temperatura + 273.15,
      FC = (temperatura - 32) * 5/9,
      FK = (temperatura + 459.67) * 5/9,
      KC = temperatura + 273.15,
      KF = temperatura * 9/5 - 459.67;

if ( !isNaN(temperatura)){

 const atual = window.prompt('informe a unidade de temperatura atual (C, F, K)').toLowerCase(),
    conversao = window.prompt('informe para qual escala você deseja converter (C, F, K').toLowerCase();

  if  (( atual == "c")  && ( conversao == "f")){ 
    window.alert (`temperatura = ${CF.toFixed(2)} `); 
    }
    else if ( atual == "c" && conversao == "k" ){ 
      window.alert (`temperatura = ${CK.toFixed(2)}`);
  }
    else if ( atual == "f" && conversao == "c"){
       window.alert (`temperatura = ${FC.toFixed(2)}`);
    }
    else if ( atual == "f" && conversao == "k"){
      window.alert (`temperatura = ${FK.toFixed(2)}`);
    }
    else if (atual == "k" && conversao == "c"){
      window.alert (`temperatura = ${KC.toFixed(2)}`);
    }
    else if ( atual == "k" && conversao == "f" ){
      window.alert (`temperatura = ${KF.toFixed(2)}`);
    }
    else {
      window.alert (` Temperatura não reconhecida, verifique se realmente você digitou um número`);
    }
    
    }else {
      window.alert(` Verifique se realmente você digitou um número, caso seja letra não irá funcionar`)

}
    
