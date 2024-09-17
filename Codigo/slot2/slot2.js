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

let activado = 0;

function tirada() {
    for (let i = 0; i < 3; i++) {
        let columna = [];
        for (let j = 0; j < 17; j++) {
            let nr = Math.floor(Math.random() * 3); // Cambiado a 3 para 3 tipos de personajes
            columna.push(personajes[nr]);
        }
        columna.push(matriz[i][0], matriz[i][1], matriz[i][2]);
        matriz[i] = columna;
    }
}

let columna1 = document.querySelector('.contenedor-columna-1');
let columna2 = document.querySelector('.contenedor-columna-2');
let columna3 = document.querySelector('.contenedor-columna-3');

function llenar() {
    columna1.innerHTML = '';
    columna2.innerHTML = '';
    columna3.innerHTML = '';

    for (let i = 0; i < matriz[0].length; i++) {
        columna1.innerHTML += `<div class="contenedor-personaje contenedor-personaje-c1 ${matriz[0][i].clase}"><img src="${matriz[0][i].img}" alt="${matriz[0][i].nombre}"></div>`;
        columna2.innerHTML += `<div class="contenedor-personaje contenedor-personaje-c2 ${matriz[1][i].clase}"><img src="${matriz[1][i].img}" alt="${matriz[1][i].nombre}"></div>`;
        columna3.innerHTML += `<div class="contenedor-personaje contenedor-personaje-c3 ${matriz[2][i].clase}"><img src="${matriz[2][i].img}" alt="${matriz[2][i].nombre}"></div>`;
    }
}

let alertaGanador = document.querySelector(".alerta-ganador");
let apuesta = document.querySelector(".apuesta");
let testeo = 500;

function testear() {
    let apuestaActual = parseFloat(apuesta.textContent.replace('Saldo: ', ''));
    let premio = 0;

    // Comprobar filas
    if (matriz[0][0] === matriz[0][1] && matriz[0][1] === matriz[0][2]) {
        premio += matriz[0][0].valor * apuestaActual;
    }
    if (matriz[1][0] === matriz[1][1] && matriz[1][1] === matriz[1][2]) {
        premio += matriz[1][0].valor * apuestaActual;
    }
    if (matriz[2][0] === matriz[2][1] && matriz[2][1] === matriz[2][2]) {
        premio += matriz[2][0].valor * apuestaActual;
    }

    // Comprobar columnas
    if (matriz[0][0] === matriz[1][0] && matriz[1][0] === matriz[2][0]) {
        premio += matriz[0][0].valor * apuestaActual;
    }
    if (matriz[0][1] === matriz[1][1] && matriz[1][1] === matriz[2][1]) {
        premio += matriz[0][1].valor * apuestaActual;
    }
    if (matriz[0][2] === matriz[1][2] && matriz[1][2] === matriz[2][2]) {
        premio += matriz[0][2].valor * apuestaActual;
    }

    // Comprobar diagonales
    if (matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2]) {
        premio += matriz[0][0].valor * apuestaActual;
    }
    if (matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0]) {
        premio += matriz[0][2].valor * apuestaActual;
    }

    testeo -= apuestaActual;
    navbar.textContent = 'Saldo: ' + testeo.toFixed(2);
    testeo += premio;

    setTimeout(() => {
        if (premio > 0) {
            alertaGanador.classList.add("ganada");
            ultPremio.textContent = '$' + premio.toFixed(2);
            navbar.textContent = 'Saldo: ' + testeo.toFixed(2);
        }
        activado = 0;
    }, 2000);
}

let ultPremio = document.querySelector(".ultimo-premio");

function animacion() {
    let listaDeTirosc1 = document.querySelectorAll(".contenedor-personaje-c1");
    let listaDeTirosc2 = document.querySelectorAll(".contenedor-personaje-c2");
    let listaDeTirosc3 = document.querySelectorAll(".contenedor-personaje-c3");
    let listaDeTiros = [listaDeTirosc1, listaDeTirosc2, listaDeTirosc3];

    for (let x of listaDeTiros) {
        for (let y of x) {
            y.classList.add('animacion');
        }
    }
}

let botonResta = document.querySelector(".restar");
let botonSumar = document.querySelector(".sumar");

function sumar() {
    let apuestaActual = parseFloat(apuesta.textContent.replace('Saldo: ', ''));
    if (apuestaActual === 5) {
        apuesta.textContent = '10';
    } else if (apuestaActual === 10) {
        apuesta.textContent = '20';
    } else if (apuestaActual === 20) {
        apuesta.textContent = '50';
    } else if (apuestaActual === 50) {
        apuesta.textContent = '100';
    }
    console.log("funciono");
}

function restar() {
    let apuestaActual = parseFloat(apuesta.textContent.replace('Saldo: ', ''));
    if (apuestaActual === 100) {
        apuesta.textContent = '50';
    } else if (apuestaActual === 50) {
        apuesta.textContent = '20';
    } else if (apuestaActual === 20) {
        apuesta.textContent = '10';
    } else if (apuestaActual === 10) {
        apuesta.textContent = '5';
    }
    console.log("funciono");
}

function jugar() {
    let apuestaActual = parseFloat(apuesta.textContent.replace('Saldo: ', ''));
    if (testeo < apuestaActual) {
        alert("Saldo Insuficiente");
    } else {
        tirada();
        llenar(); // Elimina el parámetro x para usar la longitud actual de la matriz
        animacion();
        testear();
    }
}

const boton = document.getElementById('jugar');
boton.addEventListener('click', () => {
    if (activado === 0) {
        jugar();
        activado = 1;
    }
});

botonSumar.addEventListener('click', sumar);
botonResta.addEventListener('click', restar);
llenar(); // Inicializa las columnas con los datos iniciales

let navbar = document.querySelector(".miSaldo");
navbar.textContent = 'Saldo: ' + testeo.toFixed(2);

function quitar() {
    alertaGanador.classList.remove("ganada");
}
alertaGanador.addEventListener('click', quitar);
