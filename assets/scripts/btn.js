const btnMobile = document.getElementById('btn-menu-mobile');
const nav = document.getElementById('nav-id');

btnMobile.addEventListener('click', changeMenu);
btnMobile.addEventListener('touchstart', changeMenu);

function changeMenu(event){
    if(event.type ==='touchstart') event.preventDefault();//touchstart ativa um click na sequencia do touch, preventDefault() serve para evitar o duplo acionamento 
    nav.classList.toggle('mobile-active');
    console.log('Clicou');
}
