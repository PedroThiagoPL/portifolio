//Navbar Mobile

const openMenu = document.querySelector('.menu-mobile')
openMenu.addEventListener('click', animarMenu)

function animarMenu() {

    const btn = document.getElementById('btn-menu')

    openMenu.classList.toggle('abrir')
    btn.classList.toggle('ativar') //Animar o botão mobile fazendo o X ao
}

//Efeito Máquina de EScrever

const element = document.getElementById('text-name');
var text = "Pedro Thiago";
var contador = 0;

function type () {
    if (contador < text.length) {
        element.innerHTML += text.charAt(contador);
        contador++;
        setTimeout(type, 100);
    }
}

type()