document.addEventListener('DOMContentLoaded', () => {
    // Todo tu código aquí
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
        const contenedorBilletes = document.querySelector('.animacion-billetes');
        contenedorBilletes.innerHTML = '';
        contenedorBilletes.style.display = 'block'; // Mostrar contenedor
        contenedorBilletes.style.position = 'absolute'; // Asegúrate de que el contenedor sea absoluto
        contenedorBilletes.style.top = '0'; // Comienza desde la parte superior
        contenedorBilletes.style.left = '0'; // Comienza desde la parte izquierda
        contenedorBilletes.style.width = '100%'; // Ocupa todo el ancho del div
        contenedorBilletes.style.height = '100%'; // Ocupa todo el alto del div
        contenedorBilletes.style.overflow = 'hidden'; // Oculta el contenido desbordado
    
        // Generar una gran cantidad de billetes
        for (let i = 0; i < cantidad * 2000; i++) { // Multiplica para más billetes
            const billete = document.createElement('img');
            billete.src = '../img/billete.png'; // Ruta de la imagen del billete
            billete.classList.add('billete');
            billete.style.position = 'absolute'; // Asegúrate de que esté en posición absoluta
            billete.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
            billete.style.top = '-' + Math.random() * 0 + 'px'; // Comenzar desde arriba, menos de 50px
    
            contenedorBilletes.appendChild(billete);
    
            // Añadir animación para que caiga
            const animacionDuracion = 1 + Math.random() * 4; // Duración entre 1s y 3s para una caída rápida
            billete.style.animation = `caer ${animacionDuracion}s forwards`; // Duración variable
            billete.style.animationDelay = `${Math.random() * 1}s`; // Retraso aleatorio
        }
    
        // Crear el cartel de premio
        const cartelPremio = document.createElement('div');
        cartelPremio.classList.add('cartel-premio');
        cartelPremio.textContent = `¡Has ganado $${(cantidad * 5).toFixed(2)}!`;
        cartelPremio.style.position = 'absolute';
        cartelPremio.style.top = '50%'; // Centrado verticalmente
        cartelPremio.style.left = '50%'; // Centrado horizontalmente
        cartelPremio.style.transform = 'translate(-50%, -50%)'; // Para centrar el cartel
        cartelPremio.style.backgroundColor = 'white'; // Fondo blanco
        cartelPremio.style.color = 'black'; // Texto negro
        cartelPremio.style.padding = '20px';
        cartelPremio.style.borderRadius = '10px';
        cartelPremio.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'; // Sombra para destacar
        cartelPremio.style.zIndex = '15'; // Asegúrate de que esté por encima de los billetes
    
        contenedorBilletes.appendChild(cartelPremio);
    
        // Ocultar el contenedor después de un tiempo
        setTimeout(() => {
            contenedorBilletes.style.display = 'none';
        }, 3000); // 3 segundos
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
