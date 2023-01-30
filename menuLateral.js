const botaoMenu = document.querySelector('.cabecalho-botao')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () =>{
    menu.classList.toggle('menu-lateral--ativo')
})