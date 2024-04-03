// Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve digitar a temperatura a ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

//Entradas (3): valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão).

//Fórmulas:
//t°F = (t°C * 9/5) + 32
//t°C = (t°F - 32) * 5/9
//tK = 


function ConverteTemperatura(temperaturaAtual, escalaAtual , escalaConversao) {
let temperaturaConvertida, msgErro ='Ok';


const temperatura = parseFloat(window.prompt('digite a temperatura'));
    
      
const CF = (temperatura * 9/5) + 32,
      CK = temperatura + 273.15,
      FC = (temperatura - 32) * 5/9,
      FK = (temperatura + 459.67) * 5/9,
      KC = temperatura + 273.15,
      KF = temperatura * 9/5 - 459.67;

if ( !isNaN(temperaturaAtual)) {
  escalaAtual = escalaAtual.toUpperCase();
  escalaConversao =escalaConversao.toUpperCase();

  if(escalaAtual === 'c') {

  }

 const atual = window.prompt('informe a unidade de temperatura atual (C, F, K)').toLowerCase(),
    conversao = window.prompt('informe para qual escala você deseja converter (C, F, K').toLowerCase();

  if  (( escalaAtual == "c")  && ( conversao == "f")){ 
    temperaturaConvertida = (`temperatura = ${CF.toFixed(2)} `); 
    }
    else if ( esatual == "c" && conversao == "k" ){ 
      temperaturaConvertida= (`temperatura = ${CK.toFixed(2)}`);
  }
    else if ( atual == "f" && conversao == "c"){
       (`temperatura = ${FC.toFixed(2)}`);
    }
    else if ( atual == "f" && conversao == "k"){
      temperaturaConvertida = (temperaturaAtual 
    }
    else if (atual == "k" && conversao == "c"){
      window.alert (`temperatura = ${KC.toFixed(2)}`);
    }
    else if ( atual == "k" && conversao == "f" ){
      window.alert (`temperatura = ${KF.toFixed(2)}`);
    }
    else {
      window.alert (` Temperatura não reconhecida pelo programa, verifique se você digitou um caracter número`);
    }
    
    }else {
      window.alert(` Verifique se você digitou um caracter número`)

}
// retornando em JSON - JavaScript Object Notation 
return { 
  temperaturaAtual: escalaAtual,
  escalaConversao: escalaConversao,
  temperaturaConvertida: temperaturaConvertida
}
