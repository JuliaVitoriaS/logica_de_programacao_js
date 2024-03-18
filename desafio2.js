//Crie um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa.

//Orientações:

//Utilize o método prompt() do objeto window para realizar a leitura dos dados de entrada.
//Utilize a fórmula IMC = peso / altura² para calcular o IMC.
//Utilize a estrutura if-else para classificar o IMC de acordo com a tabela da OMS:
//IMC	Indicação
//Abaixo de 18,5	Abaixo do peso
//18,5 - 24,9	Peso normal
//25,0 - 29,9	Sobrepeso
//30,0 - 34,9	Obesidade grau I
//35,0 - 39,9	Obesidade grau II
//Acima de 40,0	Obesidade grau III
//Observações: 
//O IMC é apenas uma medida geral e não leva em consideração a composição corporal (músculos versus gordura). Pessoas com muita massa muscular podem ter um IMC alto, mesmo que não sejam obesas. É importante consultar um médico ou nutricionista para uma avaliação individualizada.

//Para mais informações:

//Organização Mundial da Saúde (OMS): https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight

 const altura = 1.79, 
        peso = 83,
        imc = peso / altura ** 2;

   if (imc < 18.5) {
      console.log (`IMC: ${imc} -- Abaixo de peso`);
   }  else if  (imc > 18.5 && imc <24.9) {

      console.log (`IMC: ${imc} --peso normal`);
   } else if (imc > 25.0 && imc < 29.9) {

      console.log (`IMC: ${IMC}-- Sobrepeso`); 
   } else if (imc >= 25 && imc < 30 ){
      console.log
   }
      

