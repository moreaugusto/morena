const personajes={
    0:{
       "nombre":"bombon",
        "valor":2.5,
        "img":"../img/bombon.png",
        "clase":"bombon"
    },
    1:{
        "nombre":"burbuja",
        "valor":2.8,
        "img":"../img/burbuja.png",
        "clase":"burbuja"
    },
    2:{
        "nombre":"bellota",
        "valor":3.3,
        "img":"../img/bellota.png",
        "clase":"bellota"
    },
    3:{
        "nombre":"mojo jojo",
        "valor":3.8,
        "img":"../img/mojo.png",
        "clase":"mojo"
    }
};

let matriz=[
    [personajes[0],personajes[0],personajes[0]],
    [personajes[1],personajes[1],personajes[1]],
    [personajes[2],personajes[2],personajes[2]]
]
function tirada(){
    for (let i=0;i<3;i++){
        let columna=[]
        for(let i=0;i<17;i++){
            let nr=Math.floor(Math.random() * 4);
            columna.push(personajes[nr]);
        }
        columna.push(matriz[i][0],matriz[i][1],matriz[i][2])
        matriz[i]=columna
    }
}
let columna1 = document.querySelector('.contenedor-columna-1');
let columna2 = document.querySelector('.contenedor-columna-2');
let columna3 = document.querySelector('.contenedor-columna-3');
function llenar(x){
    columna1.innerHTML=''
    for(let i=0;i<x;i++){
        columna1.innerHTML+='<div class="contenedor-personaje contenedor-personaje-c1 '+matriz[0][i].clase+'"><img src='+matriz[0][i].img+'></div>'
    }
    columna2.innerHTML=''
    for(let i=0;i<x;i++){
        columna2.innerHTML+='<div class="contenedor-personaje contenedor-personaje-c2 '+matriz[1][i].clase+'"><img src='+matriz[1][i].img+'></div>'
    }
    columna3.innerHTML=''
    for(let i=0;i<x;i++){
        columna3.innerHTML+='<div class="contenedor-personaje contenedor-personaje-c3 '+matriz[2][i].clase+'"><img src='+matriz[2][i].img+'></div>'
    }
}
let alertaGanador=document.querySelector(".alerta-ganador")
let apuesta=document.querySelector(".apuesta")
let testeo=500;
function testear(){
    let apuestaActual= parseFloat(apuesta.textContent);
    let premio=0
        //let completoF1=0;
        //let completoF2=0;
        //let completoF3=0;
        //let completoD1=0;
        //let completoD2=0;
        if(matriz[0][0]==matriz[1][0]&&matriz[0][0]==matriz[2][0]){
            //completoF1=1;
            premio+=matriz[0][0].valor*apuestaActual;
        }
        if(matriz[0][0]==matriz[1][1]&&matriz[0][0]==matriz[2][2]){
            //completoF2=1;
            premio+=matriz[0][0].valor*apuestaActual;
        }
        if(matriz[0][1]==matriz[1][1]&&matriz[2][1]==matriz[0][1]){
            //completoF3=1;
            premio+=matriz[0][1].valor*apuestaActual;
        }
        if(matriz[0][2]==matriz[1][2]&&matriz[2][2]==matriz[0][2]){
            //completoD1=1;
            premio+=matriz[0][2].valor*apuestaActual;
        }
        if(matriz[0][2]==matriz[1][1]&&matriz[2][0]==matriz[0][2]){
            //completoD2=1;
            premio+=matriz[0][2].valor*apuestaActual;
        }
        testeo-=apuestaActual
        navbar.textContent='Saldo: '+testeo.toFixed(2)
        testeo+=premio

        const usuarioId = 15;
        actualizarSaldoYRegistrarApuesta(usuarioId, testeo, apuestaActual, premio);
        
        setTimeout(()=>{
            if(premio>0){
                alertaGanador.classList.add("ganada")
                ultPremio.textContent='$'+premio.toFixed(2)
                navbar.textContent='Saldo: '+testeo.toFixed(2)
            }

        },2000)
}
let ultPremio=document.querySelector(".ultimo-premio")
function animacion(){
    let listaDeTirosc1=document.querySelectorAll(".contenedor-personaje-c1")
    let listaDeTirosc2=document.querySelectorAll(".contenedor-personaje-c2")
    let listaDeTirosc3=document.querySelectorAll(".contenedor-personaje-c3")
    let listaDeTiros=[listaDeTirosc1,listaDeTirosc2,listaDeTirosc3]
    for(let x of listaDeTiros){
            for (y of x) {
                y.classList.add('animacion');
            }
    }
}
let botonResta=document.querySelector(".restar")
let botonSumar=document.querySelector(".sumar")
function sumar(){
    let apuestaActual= parseFloat(apuesta.textContent)
    if (apuestaActual==5){apuesta.textContent=10 ;apuesta.textContent='Saldo: '+apuestaActual.toFixed(2)}
    else if (apuestaActual==10){apuesta.textContent=20;apuesta.textContent='Saldo: '+apuestaActual.toFixed(2)}
    else if (apuestaActual==20){apuesta.textContent=50;apuesta.textContent='Saldo: '+apuestaActual.toFixed(2)}
    else if (apuestaActual==50){apuesta.textContent=100;apuesta.textContent='Saldo: '+apuestaActual.toFixed(2)}
    console.log("funciono")
}
function restar(){
    let apuestaActual=parseFloat(apuesta.textContent)
    if (apuestaActual==10){apuesta.textContent=5 ;apuesta.textContent='Saldo: '+apuestaActual.toFixed(2)}
    else if (apuestaActual==20){apuesta.textContent=10;apuesta.textContent='Saldo: '+apuestaActual.toFixed(2)}
    else if (apuestaActual==50){apuesta.textContent=20;apuesta.textContent='Saldo: '+apuestaActual.toFixed(2)}
    else if (apuestaActual==100){apuesta.textContent=50;apuesta.textContent='Saldo: '+apuestaActual.toFixed(2)}
    console.log("funciono")
}
function jugar(){
    if (testeo<apuesta.textContent){
        alert("Saldo Insuficiente")
    }
    else{
    tirada()
    llenar(20)
    animacion()
    testear()
    }
}
const boton = document.getElementById('jugar');
boton.addEventListener('click', jugar);
botonSumar.addEventListener('click', sumar);
botonResta.addEventListener('click',restar)
llenar(3)

let navbar=document.querySelector(".miSaldo")
navbar.textContent='Saldo: '+testeo.toFixed(2)



function quitar(){
    alertaGanador.classList.remove("ganada")
}
alertaGanador.addEventListener('click', quitar)




async function actualizarSaldoYRegistrarApuesta(usuarioId, nuevoSaldo, montoApuesta, ganancia) {
    try {
        let response = await fetch('slot.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ usuarioId, nuevoSaldo, montoApuesta, ganancia }),
        });

        let data = await response.json();
        if (data.success) {
            console.log('Saldo actualizado y apuesta registrada correctamente en la base de datos.');
        } else {
            console.log('Error al actualizar el saldo o registrar la apuesta:', data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}