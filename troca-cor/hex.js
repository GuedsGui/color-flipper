const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const cor = document.querySelector('.color');

btn.addEventListener('click', function() {
    let corHexa = '#';
    for (let i = 0; i < 6; i++) {
        corHexa += hex[pegarNumeroAleatorio()];
    }
    cor.textContent = corHexa;
    document.body.style.backgroundColor = corHexa;
});

function pegarNumeroAleatorio() {
    return Math.floor(Math.random() * hex.length);
}