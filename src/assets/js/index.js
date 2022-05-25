$(document).ready(function() {

    let slideAtual = 1;
    let listaSlides = ["banner-1", "banner_2", "banner_3"]

    setInterval(mudarSlide, 1500)
    console.log(slideAtual)

    function mudarSlide() {

        if (slideAtual > 0) {
            $("#carrossel").removeClass(listaSlides[slideAtual - 1])
        } else if (slideAtual == 0) {
            $("#carrossel").removeClass(listaSlides[(listaSlides.length) - 1])
        }

        $("#carrossel").addClass(listaSlides[slideAtual]);

        slideAtual++

        if (slideAtual > listaSlides.length - 1) {
            slideAtual = 0
        }
    }
})

function mostrarMenu() {
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display ==  'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display ='none';
    }
}

function mostrarMenu_2() {
    let menu = document.getElementById("menu-lupa")

    if (getComputedStyle(menu).display ==  'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display ='none';
    }
}