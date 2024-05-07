const links = [
 {"rel":"stylesheet", href:"/css/reset.css"},
 {"rel":"stylesheet", href:"/css/style.css"},
 {"rel":"stylesheet", href:"/css/responsidade.css"},
];

links.forEach(link => {
 const l = document.createElement('link');
 l.rel = link.rel;
 l.href =link.href;
 document.head.appendChild(1);

});