//Ancora do exercício 1
const ancoras = [
    { "url": "/index.html", "texto": "Home"},
    { "url": "exercicio/exercicio1.html" ,"texto": "Exerc.1"},
    { "url": "classificacao_triangulo.html" ,"texto": "Exerc.3"},
    { "url": "PlacarDeJogo.html", "texto": "Exerc.PlacarJogo"},
];


function criaAncora (url, texto){
    const ancora = document.createElement('a');
    ancora.setAttribute('href', url);
    ancora.innerHTML = texto;
    
     return ancora;
}

function criarAncoraLi (ancora ){
    const li = document.createElement ('li');
    li.appendChild(ancora);

    return li;

}

function criaUlNav(ancoras) {
  const ul = document.createElement ('ul');
    ancoras.forEach(ancora => {
        const a = criaAncora(ancora.url, ancora.texto);
        const li = criarAncoraLi(a);
        ul.appendChild(li);


    })
  return ul;
}






// <a> do home

// const aHome= criaAngora('/index.html', 'Home');

//<li> do home
// const liHome = li(aHome);

// //<a> exercicio 1
// const aExercicios1 =criaAngora('/exercicios/exercicios1.html', 'Exrc.1');

// // <li> do exercicio 1

// const liExercicios1 =document.createAttribute ('li')
// liExercicios1.appendChild(aExercicios1);







//<nav> do menu
const nav = document.createElement ('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(criaUlNav(ancoras));
console.log(criaUlNav(ancoras));
 
// aqui segue  de acordo com a solução do professor 
//<span> Desafios & Exercicios <span>

const spanlogo =document.createElement('span');
spanlogo.classList.add('logo');

//<div class="logo-menu">

const divlogo =document.createElement('div');
divlogo.classList.add('logo');
divlogo.append(spanlogo);

const divMenuLogo =document.createElement('div');
divMenuLogo.classList.add('logo-menu');
divMenuLogo.append(divlogo, nav);



const header =document.createElement ('header');
header.appendChild(divMenuLogo);



// document.body.insertBefore(nav, document.body.firstChild);
document.body.insertAdjacentElement('afterbegin', header);

const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '/navbar.css');

document.head.appendChild(linkNavbar);


// function criaAncora (url, texto){
//     const ancora = document.createElement('a');
//     ancora.setAttribute('href', '/index.html');
//     ancora.innerHTML = texto;
    
//      return ancora;
// }

// function criarAngoraLi (ancora ){
//     const li = document.createElement ('li');
//     li.appendChild(ancora);
  

//     return li;
    

// }}

  