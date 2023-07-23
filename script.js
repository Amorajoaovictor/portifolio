

function ativaletra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
    console.log(arrTexto);
}
const titulo = document.querySelector('.digitando'); console.log(titulo);
ativaletra(titulo);