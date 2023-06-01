const cores = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById('btn');
const cor = document.querySelector('.color');

btn.addEventListener('click', function() {
    // pegar número aleatório entre 0 - 3
    const numeroAleatorio = pegarNumeroAleatorio();
    console.log(numeroAleatorio);

    document.body.style.backgroundColor = cores[numeroAleatorio];
    cor.textContent = cores[numeroAleatorio];
});

function pegarNumeroAleatorio() {
    return Math.floor(Math.random() * cores.length);
}