

document.addEventListener('DOMContentLoaded', () => {
    const listanumeros = document.querySelectorAll(".numero");
    const anguloPorNumero = 360 / listanumeros.length;
    const radio = 130; // Radio del círculo en px, ajusta según el tamaño
    const contenedor = document.querySelector('.ruleta');
    const centroX = contenedor.clientWidth / 2; // Mitad del ancho del contenedor
    const centroY = contenedor.clientHeight / 2; // Mitad del alto del contenedor

    // Posiciona los números alrededor del centro de la ruleta
    listanumeros.forEach((numero, i) => {
        const angulo = i * anguloPorNumero;
        const radianes = angulo * Math.PI / 180;
        const x = centroX + radio * Math.cos(radianes) - numero.offsetWidth / 2;
        const y = centroY + radio * Math.sin(radianes) - numero.offsetHeight / 2;

        numero.style.left = `${x}px`;
        numero.style.top = `${y}px`;
        numero.style.transform = `rotate(${angulo + 90}deg)`; // Ajusta la rotación para que el texto esté orientado hacia el centro
    });

    // Función para actualizar la rotación de la ruleta
    let anguloTotal = 0; // Ángulo total de rotación
    function actualizarRotacion() {
        anguloTotal += 1; // Incrementa el ángulo para la rotación
        contenedor.style.transform = `rotate(${anguloTotal}deg)`;
    }

    // Usa setInterval para llamar a actualizarRotacion cada 16 ms (aproximadamente 60 FPS)
    setInterval(actualizarRotacion, 16); // Ajusta el intervalo para cambiar la velocidad
});
