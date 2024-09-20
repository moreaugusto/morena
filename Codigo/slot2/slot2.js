document.addEventListener('DOMContentLoaded', () => {
    const personajes = {
        0: {
            "nombre": "pescado",
            "valor": 2.5,
            "img": "../img/pescado.png",
            "clase": "pescado"
        },
        1: {
            "nombre": "cerveza",
            "valor": 2.8,
            "img": "../img/cerveza.png",
            "clase": "cerveza"
        },
        2: {
            "nombre": "dona",
            "valor": 3.3,
            "img": "../img/dona.png",
            "clase": "dona"
        }
    };

    let matriz = [
        [personajes[0], personajes[0], personajes[0]],
        [personajes[1], personajes[1], personajes[1]],
        [personajes[2], personajes[2], personajes[2]]
    ];

    let testeo = 500; // Saldo inicial
    let navbar = document.querySelector(".miSaldo");
    let alertaGanador = document.querySelector(".alerta-ganador");
    let apuesta = document.querySelector(".apuesta");
    let ultPremio = document.querySelector(".ultimo-premio");

    function tirada() {
        for (let i = 0; i < 3; i++) {
            let columna = [];
            for (let j = 0; j < 17; j++) {
                let nr = Math.floor(Math.random() * 3);
                columna.push(personajes[nr]);
            }
            matriz[i] = columna;
        }
    }

    function llenar() {
        const columnas = [document.querySelector('.contenedor-columna-1'), document.querySelector('.contenedor-columna-2'), document.querySelector('.contenedor-columna-3')];
        
        columnas.forEach((columna, index) => {
            columna.innerHTML = '';
            for (let i = 0; i < matriz[index].length; i++) {
                columna.innerHTML += `<div class="contenedor-personaje contenedor-personaje-c${index + 1} ${matriz[index][i].clase}"><img src="${matriz[index][i].img}" alt="${matriz[index][i].nombre}"></div>`;
            }
        });
    }

    function mostrarBilletes(cantidad) {
        const animacionContainer = document.querySelector('.animacion-billetes');
        const cartelPremio = document.querySelector('.cartel-premio');
        const premioSpan = document.querySelector('.premio-gano');

        // Mostrar el cartel con el monto ganado
        premioSpan.textContent = `¡Ganaste: $${cantidad * 5}!`;
        cartelPremio.style.display = 'block'; // Mostrar el cartel

        // Limpiar billetes existentes
        animacionContainer.innerHTML = '';

        // Crear billetes
        for (let i = 0; i < cantidad; i++) {
            const billete = document.createElement('img');
            billete.src = 'billete.png'; // Ruta a la imagen del billete
            billete.className = 'billete';
            billete.style.left = Math.random() * 100 + 'vw'; // Posición aleatoria en el ancho
            billete.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración aleatoria
            animacionContainer.appendChild(billete);
        }

        // Ocultar el cartel después de 3 segundos
        setTimeout(() => {
            cartelPremio.style.display = 'none'; // Ocultar el cartel
        }, 3000);
    }

    function testear() {
        let apuestaActual = parseFloat(apuesta.textContent.replace('Saldo: ', ''));
        let premio = 0;

        if (matriz[0][0] === matriz[0][1] && matriz[0][1] === matriz[0][2]) {
            premio += matriz[0][0].valor * apuestaActual;
        }
        if (matriz[1][0] === matriz[1][1] && matriz[1][1] === matriz[1][2]) {
            premio += matriz[1][0].valor * apuestaActual;
        }
        if (matriz[2][0] === matriz[2][1] && matriz[2][1] === matriz[2][2]) {
            premio += matriz[2][0].valor * apuestaActual;
        }

        if (premio > 0) {
            mostrarBilletes(Math.floor(premio / 5)); // Ajusta la cantidad de billetes
            alertaGanador.classList.add("ganada");
            ultPremio.textContent = '$' + premio.toFixed(2);
        }

        testeo -= apuestaActual; // Resta la apuesta
        navbar.textContent = 'Saldo: ' + testeo.toFixed(2);
        testeo += premio; // Añade el premio al saldo
    }

    const boton = document.getElementById('jugar');
    boton.addEventListener('click', () => {
        tirada();
        llenar(); 
        testear();
    });

    navbar.textContent = 'Saldo: ' + testeo.toFixed(2);
});
