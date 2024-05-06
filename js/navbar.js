//Ancora do exercício 1
const ancoras = [
{ "url": "/index.html", "texto": "Home"},
{ "url": "exercicios/exercicios1.html" ,"texto": "Exerc.1"},
{ "url": "exercicios/exercicios3.html" ,"texto": "Exerc.3"},
];


function criaAncora (url, texto){
    const ancora = document.createElement('a');
    ancora.setAttribute('href', '/index.html');
    ancora.innerHTML = texto;
    
     return ancora;
}

function criarAngoraLi (ancora ){
    const li = document.createElement ('li');
    li.appendChild(ancora);
  

    return li;


function criaUlNav(ancoras) {
  const ul = document.createElement ('ul');
    ancoras.foreEach(ancora => {
        const a = criaAncora(ancora.url, ancora.texto);
        const li = criarAngoraLi(a);
        ul.appendChild(li);


    })
    
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




//<ul> do menu
const ulNav = document.createElement ('ul');
ulNav.append(liHome, liExercicios)



//<nav> do menu
const nav = document.createElement ('nav');
nav.classList.add ('menu-navegacao');
nav.appendChild (ulNav);
 
// aqui segue  de acordo com a solução do professor 
//<span> Desafios & Exercicios <span>

const spanLogo =document.createElement('div');
divMenuLogo.classList.add('logo');

//<div class="logo-menu">

const divlogo =document.createElement('div');
divlogo.classList.add('logo-menu');
divlogo.append(divlogo, nav);



const divMenuLogo =document.createElement('div');
divMenuLogo.classList.add('logo-menu');
divMenuLogo.appendChild(nav);

const header =document.createElement ('header');
header.appendChild(divMenuLogo);

document.body.append(nav); 

// document.body.insertBefore(nav, document.body.firstChild);
document.body.insertAdjacentElement('afterbegin', header);

const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'steyleheet');
linkNavbar.setAttribute('href', '/css/navbar.css');

document.head.appendChild(linkNavbar);}


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

  