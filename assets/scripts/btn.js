const btnMobile = document.getElementById('btn-menu-mobile');
const nav = document.getElementById('nav-id');

btnMobile.addEventListener('click', changeMenu);
btnMobile.addEventListener('touchstart', changeMenu);

function changeMenu(event){
    if(event.type ==='touchstart') event.preventDefault();//touchstart ativa um click na sequencia do touch, preventDefault() serve para evitar o duplo acionamento 
    nav.classList.toggle('mobile-active');
    console.log('Clicou');
}

const linkHome = document.getElementById('linkHome')
const linkSobre = document.getElementById('linkSobre')
const linkDiferenciais = document.getElementById('linkDiferenciais')
const linkFaleConosco = document.getElementById('menu-fale-conosco')

linkHome.addEventListener('click', changeMenu);
linkSobre.addEventListener('click', changeMenu)
linkDiferenciais.addEventListener('click', changeMenu)
linkFaleConosco.addEventListener('click', changeMenu)


