function menu() {
    let menuitens = document.querySelector('div#menu-itens')
    let menuimg = document.querySelector('img#menu')
    let ishidden = menuitens.style.display == '' || menuitens.style.display == 'none'

    if (ishidden){
    menuimg.src = 'assets/images/icon-menu-close.svg';
    menuitens.style.display = 'block';
    } else {
        menuimg.src = 'assets/images/icon-menu.svg'
        menuitens.style.display = 'none'
    }
}