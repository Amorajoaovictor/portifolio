document.addEventListener('DOMContentLoaded', function () {
    const titulo = document.querySelector('.digitando');

    if (titulo) {
        ativaletra(titulo);
    } else {
        console.error("Elemento com a classe 'digitando' não foi encontrado.");
    }

    function ativaletra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        let i = 0;

        const interval = setInterval(() => {
            if (i < arrTexto.length) {
                elemento.innerHTML += arrTexto[i];
                i++;
            } else {
                clearInterval(interval);
            }
        }, 75);
    }
});
