const temperatura= window.prompt ('Digite  temperatura')
// parseFloat ()-> converte texto para tipo number com ponto decimal
// parseInt() -> converte texto para tipo number inteiro 
 window.alert (`A tempertaura convertida e ${temperatura + 273.15}`);
console.log (typeof (temperatura))
const escalaAtual= parseFloat (window.prompt('Digite a escala atual'));
const escalaAtual = window.prompt ('Digitea escala atual').toUpperCase();
console.log (!true);

const e1 = 'C', e2 = 'F';
if ((e1 == 'C' || e1 == 'c') && (e2 == 'K' || e2 == 'k')) {
    console.log ('Celsius -> Kelvin');
}else if ((e1 == 'C' || e2 == 'c') && (e2 == 'F'|| e2 == 'f')) {
    console.log ('Celsius -> Fahrenheit');
}

// perseFloat() -> Função que converte o texto para tipo nunber com posto decimal
// perseIn () ->: Função que converte texto para tipo nunber inteiro
//toloweCrase () -> medoto qiue converte o texto em minusculas
