
document.addEventListener('DOMContentLoaded', () => {
    const listanumeros = document.querySelectorAll(".numero");
    const anguloPorNumero = 360 / listanumeros.length;
    const radio = 700; // Radio del círculo en px
    let anguloTotal = 0; // Ángulo de rotación total

    // Posiciona los números alrededor del centro de la ruleta
    listanumeros.forEach((numero, i) => {
        const angulo = i * anguloPorNumero;
        // La transformación mueve el número al borde del círculo y luego lo rota para que el texto esté recto
        numero.style.transform = `rotate(${angulo}deg) translate(${radio/2}px) rotate(${-angulo}deg)`;
        numero.style.top = '50%'; // Centra verticalmente el contenedor
        numero.style.left = '50%'; // Centra horizontalmente el contenedor
        numero.style.transformOrigin = '0 0'; // Establece el origen de transformación en la esquina superior izquierda
    });

    // Función para actualizar la rotación de la ruleta
    function actualizarRotacion() {
        anguloTotal += 1; // Incrementa el ángulo para la rotación
        document.querySelector('.ruleta').style.transform = `rotate(${anguloTotal}deg)`;
        document.querySelector('.ruleta2').style.transform = `rotate(${-anguloTotal}deg)`; 
    }

    // Usa setInterval para llamar a actualizarRotacion cada 16 ms (aproximadamente 60 FPS)
    setInterval(actualizarRotacion, 16); // Ajusta el intervalo para cambiar la velocidad
});


