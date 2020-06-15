const altura = document.body.scrollHeight - window.innerHeight;

const fondo = document.getElementById('fondo');

window.onscroll = () => {
    const anchoFondo = (window.pageXOffset / altura) * 900;
    fondo.style.width = anchoFondo + '%';
}