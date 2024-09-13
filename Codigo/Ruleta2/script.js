let testeo=500;
let ultPremio=0
let ficha=1
let saldo=document.querySelector(".miSaldo")
saldo.textContent='Saldo: '+testeo.toFixed(2);console.log(testeo)
        
let listaNumeros=Array.from(document.querySelectorAll(".tableta-numero"))

let ficha1=document.querySelector(".ficha-1")
let ficha2=document.querySelector(".ficha-2")
let ficha3=document.querySelector(".ficha-3")
let ficha4=document.querySelector(".ficha-4")
let ficha5=document.querySelector(".ficha-5")
let ficha6=document.querySelector(".ficha-6")
let ficha7=document.querySelector(".ficha-7")

ficha1.addEventListener('click',()=>{
    ficha=1
})
ficha2.addEventListener('click',()=>{
    ficha=5
})
ficha3.addEventListener('click',()=>{
    ficha=10
})
ficha4.addEventListener('click',()=>{
    ficha=50
})
ficha5.addEventListener('click',()=>{
    ficha=100
})
ficha6.addEventListener('click',()=>{
    ficha=500
})
ficha7.addEventListener('click',()=>{
    ficha=1000
})

function agregarNumeroAFicha(fichaCuestion,cantidad){
    let divEnCuestion = document.createElement("div");
    divEnCuestion.textContent=cantidad
    divEnCuestion.classList.add="ficha-div"
    fichaCuestion.appendChild(divEnCuestion)
}
agregarNumeroAFicha(ficha1,1)

listaNumeros.forEach(function(elemento) {
    elemento.addEventListener("click", function() {
        let index=parseInt(elemento.textContent)
        if(testeo>=ficha){
            console.log("Pusiste una ficha en el numero:", elemento.textContent);
            libroApuestas.numeros[index]+=ficha
            testeo-=ficha
            agregarFicha(elemento)
            saldo.textContent='Saldo: '+testeo.toFixed(2);console.log(testeo)
        }
    });
});
listaNumeros.forEach(function(elemento) {
    elemento.addEventListener("mouseover", function() {
        elemento.classList.add("ponerleFicha")
    });
});
listaNumeros.forEach(function(elemento) {
    elemento.addEventListener("mouseout", function() {
        elemento.classList.remove("ponerleFicha")
    });
});
let filainvisible1=Array.from(document.querySelectorAll(".numero-invisible-fila-1"))
let filainvisible2=Array.from(document.querySelectorAll(".numero-invisible-fila-2"))
let filainvisible3=Array.from(document.querySelectorAll(".numero-invisible-fila-3"))
let filainvisible4=Array.from(document.querySelectorAll(".numero-invisible-fila-4"))
let filainvisible5=Array.from(document.querySelectorAll(".numero-invisible-fila-5"))
let invisibles=[filainvisible1,filainvisible2,filainvisible3,filainvisible4,filainvisible5]


function agregarFicha(elemento){
if(ficha==1){elemento.innerHTML+='<img src="../img/ficha1.png" class="fichin">'}
else if(ficha==5){elemento.innerHTML+='<img src="ficha2.png" class="fichin">'}
else if(ficha==10){elemento.innerHTML+='<img src="ficha3.png" class="fichin">'}
else if(ficha==50){elemento.innerHTML+='<img src="ficha4.png" class="fichin">'}
else if(ficha==100){elemento.innerHTML+='<img src="ficha5.png" class="fichin">'}
else if(ficha==500){elemento.innerHTML+='<img src="ficha6.png" class="fichin">'}
else if(ficha==1000){elemento.innerHTML+='<img src="ficha7.png" class="fichin">'}
}
invisibles.forEach(lista=>{
    lista.forEach(elemento => {
        elemento.addEventListener("mouseover", () => {
        if(!filainvisible2.includes(elemento)&&!filainvisible4.includes(elemento)){
            let index=0
            if(filainvisible1.includes(elemento)){
                index=lista.indexOf(elemento)
            }
            else if(filainvisible3.includes(elemento)){
                index=lista.indexOf(elemento)+12
            }
            else if(filainvisible5.includes(elemento)){
                index=lista.indexOf(elemento)+24
            }

            listaNumeros[index].classList.add("ponerleFicha")
            listaNumeros[index+1].classList.add("ponerleFicha")
        }
        else{
            let index=0

            if(filainvisible2.includes(elemento)){
                index=Math.floor(lista.indexOf(elemento)/2)
            }
            else{
                index=Math.floor(lista.indexOf(elemento)/2)+12
            }
            listaNumeros[index].classList.add("ponerleFicha")
            
            listaNumeros[index+12].classList.add("ponerleFicha")
            if(lista.indexOf(elemento)%2!==0){
            listaNumeros[index+13].classList.add("ponerleFicha")
            listaNumeros[index+1].classList.add("ponerleFicha")
            }
        }
            
            });

    });
    lista.forEach(elemento => {
        elemento.addEventListener("mouseout", () => {
            if(!filainvisible2.includes(elemento)&&!filainvisible4.includes(elemento)){
                let index=0
                if(filainvisible1.includes(elemento)){
                    index=lista.indexOf(elemento)
                }
                else if(filainvisible3.includes(elemento)){
                    index=lista.indexOf(elemento)+12
                }
                else if(filainvisible5.includes(elemento)){
                    index=lista.indexOf(elemento)+24
                }
    
                listaNumeros[index].classList.remove("ponerleFicha")
                listaNumeros[index+1].classList.remove("ponerleFicha")
            }
            else{
                let index=0
                if(filainvisible2.includes(elemento)){
                    index=Math.floor(lista.indexOf(elemento)/2)
                }
                else{
                    index=Math.floor(lista.indexOf(elemento)/2)+12
                }
                listaNumeros[index].classList.remove("ponerleFicha")
                
                listaNumeros[index+12].classList.remove("ponerleFicha")
                if(lista.indexOf(elemento)%2!==0){
                listaNumeros[index+13].classList.remove("ponerleFicha")
                listaNumeros[index+1].classList.remove("ponerleFicha")
                }
            }
        });
    });
}
)
invisibles.forEach(lista=>{
    lista.forEach(elemento => {
        elemento.addEventListener("mouseover", () => {
        if(!filainvisible2.includes(elemento)&&!filainvisible4.includes(elemento)){
            let index=0
            if(filainvisible1.includes(elemento)){
                index=lista.indexOf(elemento)
            }
            else if(filainvisible3.includes(elemento)){
                index=lista.indexOf(elemento)+12
            }
            else if(filainvisible5.includes(elemento)){
                index=lista.indexOf(elemento)+24
            }

            listaNumeros[index].classList.add("ponerleFicha")
            listaNumeros[index+1].classList.add("ponerleFicha")
        }
        else{
            let index=0

            if(filainvisible2.includes(elemento)){
                index=Math.floor(lista.indexOf(elemento)/2)
            }
            else{
                index=Math.floor(lista.indexOf(elemento)/2)+12
            }
            listaNumeros[index].classList.add("ponerleFicha")

            listaNumeros[index+12].classList.add("ponerleFicha")
            if(lista.indexOf(elemento)%2!==0){
            listaNumeros[index+13].classList.add("ponerleFicha")
            listaNumeros[index+1].classList.add("ponerleFicha")
            }
        }

            });

    });
    lista.forEach(elemento => {
        elemento.addEventListener("click", () => {
            if(testeo>=ficha){
            if(!filainvisible2.includes(elemento)&&!filainvisible4.includes(elemento)){
                let index=0
                if(filainvisible1.includes(elemento)){
                    index=lista.indexOf(elemento)
                }
                else if(filainvisible3.includes(elemento)){
                    index=lista.indexOf(elemento)+12
                }
                else if(filainvisible5.includes(elemento)){
                    index=lista.indexOf(elemento)+24
                }
                console.log("pusiste una ficha entre:",listaNumeros[index].innerHTML,"y",listaNumeros[index+1].innerHTML)
                libroApuestas.numeros[parseInt(listaNumeros[index].innerHTML)]+=ficha/2
                libroApuestas.numeros[parseInt(listaNumeros[index+1].innerHTML)]+=ficha/2
                testeo-=ficha
                saldo.textContent='Saldo: '+testeo.toFixed(2);console.log(testeo)
                agregarFicha(elemento)
                
                
            }
            else{
                let index=0
                if(filainvisible2.includes(elemento)){
                    index=Math.floor(lista.indexOf(elemento)/2)
                }
                else{
                    index=Math.floor(lista.indexOf(elemento)/2)+12
                }
                if(lista.indexOf(elemento)%2!==0){
                    console.log("pusiste una ficha entre:",listaNumeros[index+12].innerHTML,",",listaNumeros[index].innerHTML,",",listaNumeros[index+13].innerHTML,"y",listaNumeros[index+1].innerHTML)
                    libroApuestas.numeros[parseInt(listaNumeros[index+12].innerHTML)]+=ficha/4
                    libroApuestas.numeros[parseInt(listaNumeros[index].innerHTML)]+=ficha/4
                    libroApuestas.numeros[parseInt(listaNumeros[index+13].innerHTML)]+=ficha/4
                    libroApuestas.numeros[parseInt(listaNumeros[index+1].innerHTML)]+=ficha/4
                    testeo-=ficha
                    saldo.textContent='Saldo: '+testeo.toFixed(2)
                    agregarFicha(elemento)
                }
                else{
                    console.log("pusiste una ficha entre:",listaNumeros[index].innerHTML,"y",listaNumeros[index+12].innerHTML)
                    libroApuestas.numeros[parseInt(listaNumeros[index].innerHTML)]+=ficha/2
                    libroApuestas.numeros[parseInt(listaNumeros[index+12].innerHTML)]+=ficha/2
                    testeo-=ficha
                    saldo.textContent='Saldo: '+testeo.toFixed(2)
                    agregarFicha(elemento)
                }
            }
        }
        });
    });
}
)


let mitades=Array.from(document.querySelectorAll(".mitad"))
let colores=Array.from(document.querySelectorAll(".color"))
let paridades=Array.from(document.querySelectorAll(".paridad"))

mitades.forEach(elemento => {
    elemento.addEventListener("mouseover",function(){
        elemento.classList.add("ponerleFicha")
    })
});
mitades.forEach(elemento => {
    elemento.addEventListener("mouseout",function(){
        elemento.classList.remove("ponerleFicha")
})
});
mitades.forEach(elemento => {
    elemento.addEventListener("click",function(){
       if(testeo>=ficha){
        console.log("le pusiste una fichita a:",elemento.textContent)
        libroApuestas.mitad[mitades.indexOf(elemento)]+=ficha
        testeo-=ficha
        saldo.textContent='Saldo: '+testeo.toFixed(2);console.log(testeo)
        agregarFicha(elemento)
       }
})
});
colores.forEach(elemento => {
    elemento.addEventListener("mouseover",function(){
        elemento.classList.add("ponerleFicha")
    })
});
colores.forEach(elemento => {
    elemento.addEventListener("mouseout",function(){
        elemento.classList.remove("ponerleFicha")
})
});
colores.forEach(elemento => {
    elemento.addEventListener("click",function(){
       if(testeo>=ficha){
        console.log("le pusiste una fichita a:",elemento.textContent)
        libroApuestas.color[colores.indexOf(elemento)]+=ficha
        testeo-=ficha
        saldo.textContent='Saldo: '+testeo.toFixed(2);console.log(testeo)
        agregarFicha(elemento)
       }
})
});
paridades.forEach(elemento => {
    elemento.addEventListener("mouseover",function(){
        elemento.classList.add("ponerleFicha")
    })
});
paridades.forEach(elemento => {
    elemento.addEventListener("mouseout",function(){
        elemento.classList.remove("ponerleFicha")
})
});
paridades.forEach(elemento => {
    elemento.addEventListener("click",function(){
       if(testeo>=ficha){
        console.log("le pusiste una fichita a:",elemento.textContent)
        libroApuestas.par[paridades.indexOf(elemento)]+=ficha
        testeo-=ficha
        saldo.textContent='Saldo: '+testeo.toFixed(2);console.log(testeo)
        agregarFicha(elemento)
       }
})
});


let docenas=Array.from(document.querySelectorAll(".docena"))

docenas.forEach(elemento => {
    elemento.addEventListener("mouseover",function(){
        elemento.classList.add("ponerleFicha")
    })
});
docenas.forEach(elemento => {
    elemento.addEventListener("mouseout",function(){
        elemento.classList.remove("ponerleFicha")
})
});
docenas.forEach(elemento => {
    elemento.addEventListener("click",function(){
       if(testeo>=ficha){
        console.log("le pusiste una fichita a:",docenas.indexOf(elemento))
        libroApuestas.docenas[docenas.indexOf(elemento)]+=ficha
        testeo-=ficha
        saldo.textContent='Saldo: '+testeo.toFixed(2);console.log(testeo)
        agregarFicha(elemento)
       }

})
});

let tercios=Array.from(document.querySelectorAll(".tercio"))

tercios.forEach(elemento => {
    elemento.addEventListener("mouseover",function(){
        elemento.classList.add("ponerleFicha")
    })
});
tercios.forEach(elemento => {
    elemento.addEventListener("mouseout",function(){
        elemento.classList.remove("ponerleFicha")
})
});
tercios.forEach(elemento => {
    elemento.addEventListener("click",function(){
       if(testeo>=ficha){
        console.log("le pusiste una fichita a:",elemento.textContent)
        libroApuestas.tercios[tercios.indexOf(elemento)]+=ficha
        testeo-=ficha
        agregarFicha(elemento)
       }
})
});

let cero=document.querySelector(".apuesta-izquierda")
    cero.addEventListener("mouseover",function(){
        cero.classList.add("ponerleFicha")
    })
    cero.addEventListener("mouseout",function(){
        cero.classList.remove("ponerleFicha")
})
    cero.addEventListener("click",function(){
       if(testeo>=ficha){
        console.log("le pusiste una fichita a:",cero.innerHTML)
        libroApuestas.numeros[parseInt(cero.innerHTML)]+=ficha
        testeo-=ficha
        saldo.textContent='Saldo: '+testeo.toFixed(2);console.log(testeo)
        agregarFicha(cero)
    }
})

let libroApuestas={
    numeros:{
        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0,
        12:0,
        13:0,
        14:0,
        15:0,
        16:0,
        17:0,
        18:0,
        19:0,
        20:0,
        21:0,
        22:0,
        23:0,
        24:0,
        25:0,
        26:0,
        27:0,
        28:0,
        29:0,
        30:0,
        31:0,
        32:0,
        33:0,
        34:0,
        35:0,
        36:0,
    },
    docenas:{
        0:0,
        1:0,
        2:0
    },
    tercios:{
        0:0,
        1:0,
        2:0
    },
    par:{
        0:0,
        1:0,
    },
    color:{
        0:0,
        1:0,
    },
    mitad:{
        0:0,
        1:0
    }

}
let ruletaNumero={
    0:{
    docenas:3,
    mitades:6,
    numeros:0,
    tercios:2
    },
    1:{
        docenas:0,
        par:1,
        color:0,
        mitad:0,
        numeros:1,
        tercios:2
        },
    2:{
        docenas:0,
        par:0,
        color:1,
        mitad:0,
        numeros:2,
        tercios:1
        },
    3:{
        docenas:0,
        par:1,
        color:0,
        mitad:0,
        numeros:3,
        tercios:0
        },
    4:{
        docenas:0,
        par:0,
        color:1,
        mitad:0,
        numeros:4,
        tercios:2
        },
    5:{
        docenas:0,
        par:1,
        color:0,
        mitad:0,
        numeros:5,
        tercios:1
        },
    6:{
        docenas:0,
        par:0,
        color:1,
        mitad:0,
        numeros:6,
        tercios:0
        },
    7:{
        docenas:0,
        par:1,
        color:0,
        mitad:0,
        numeros:1,
        tercios:2
        },
    8:{
        docenas:0,
        par:0,
        color:1,
        mitad:0,
        numeros:1,
        tercios:2
        },
    9:{
        docenas:0,
        par:1,
        color:0,
        mitad:0,
        numeros:1,
        tercios:2
        },
    10:{
        docenas:0,
        par:0,
        color:1,
        mitad:0,
        numeros:1,
        tercios:2
        },
    11:{
        docenas:0,
        par:1,
        color:1,
        mitad:0,
        numeros:11,
        tercios:1
        },
    12:{
        docenas:0,
        par:0,
        color:0,
        mitad:0,
        numeros:12,
        tercios:0
        },
    13:{
        docenas:1,
        par:1,
        color:1,
        mitad:0,
        numeros:13,
        tercios:2
        },
    14:{
        docenas:1,
        par:0,
        color:0,
        mitad:0,
        numeros:14,
        tercios:1
        },
    15:{
        docenas:1,
        par:1,
        color:1,
        mitad:0,
        numeros:15,
        tercios:0
        },
    16:{
        docenas:1,
        par:0,
        color:0,
        mitad:0,
        numeros:16,
        tercios:2
        },
    17:{
        docenas:1,
        par:1,
        color:1,
        mitad:0,
        numeros:17,
        tercios:1
        },
    18:{
        docenas:1,
        par:0,
        color:0,
        mitad:0,
        numeros:18,
        tercios:0
        },
    19:{
        docenas:1,
        par:1,
        color:0,
        mitad:1,
        numeros:19,
        tercios:2
        },
    20:{
        docenas:1,
        par:0,
        color:1,
        mitad:1,
        numeros:20,
        tercios:1
        },
    21:{
        docenas:1,
        par:1,
        color:0,
        mitad:1,
        numeros:21,
        tercios:0
        },
    22:{
        docenas:1,
        par:0,
        color:1,
        mitad:1,
        numeros:22,
        tercios:2
        },
    23:{
        docenas:1,
        par:1,
        color:0,
        mitad:1,
        numeros:23,
        tercios:1
        },
    24:{
        docenas:1,
        par:0,
        color:1,
        mitad:1,
        numeros:24,
        tercios:0
        },
    25:{
        docenas:2,
        par:1,
        color:0,
        mitad:1,
        numeros:25,
        tercios:2
        },
    26:{
        docenas:2,
        par:0,
        color:1,
        mitad:1,
        numeros:26,
        tercios:1
        },
    27:{
        docenas:2,
        par:1,
        color:0,
        mitad:1,
        numeros:27,
        tercios:0
        },
    28:{
        docenas:2,
        par:0,
        color:0,
        mitad:1,
        numeros:28,
        tercios:2
        },
    29:{
        docenas:2,
        par:1,
        color:1,
        mitad:1,
        numeros:29,
        tercios:1
        },
    30:{
        docenas:2,
        par:0,
        color:0,
        mitad:1,
        numeros:30,
        tercios:0
        },
    31:{
        docenas:2,
        par:1,
        color:1,
        mitad:1,
        numeros:31,
        tercios:2
        },
    32:{
        docenas:2,
        par:0,
        color:0,
        mitad:1,
        numeros:32,
        tercios:1
        },
    33:{
        docenas:2,
        par:1,
        color:1,
        mitad:1,
        numeros:33,
        tercios:0
        },
    34:{
        docenas:2,
        par:0,
        color:0,
        mitad:1,
        numeros:34,
        tercios:2
        },
    35:{
        docenas:2,
        par:1,
        color:1,
        mitad:1,
        numeros:35,
        tercios:1
        },
    36:{
        docenas:2,
        par:0,
        color:0,
        mitad:1,
        numeros:36,
        tercios:0
        }
}
let numeroActual=37


function verificarResultado(){
        numeroApuesta=ruletaNumero[numeroActual]
        console.log(numeroApuesta)
        if(libroApuestas.numeros[numeroApuesta.numeros]>0){console.log("tus fichas apostadas a número se multiplican x36!!!");testeo+=libroApuestas.numeros[numeroApuesta.numeros]*32}
        if(libroApuestas.docenas[numeroApuesta.docenas]>0){console.log("tus fichas apostadas a docena se triplican!!!");testeo+=libroApuestas.docenas[numeroApuesta.docenas]*3}
        if(libroApuestas.tercios[numeroApuesta.tercios]>0){console.log("tus fichas apostadas a tercio se triplican!!!");console.log(testeo);testeo+=libroApuestas.tercios[numeroApuesta.tercios]*3}
        if(libroApuestas.par[numeroApuesta.par]>0){console.log("tus fichas apostadas a pares se duplican!!!");console.log(testeo);testeo+=libroApuestas.par[numeroApuesta.par]*2}
        if(libroApuestas.color[numeroApuesta.color]>0){console.log("tus fichas apostadas a colores se duplican!!!");console.log(testeo);testeo+=libroApuestas.color[numeroApuesta.color]*2}
        if(libroApuestas.mitad[numeroApuesta.mitad]>0){console.log("tus fichas apostadas a mitades se duplican!!!");console.log(testeo);testeo+=libroApuestas.mitad[numeroApuesta.mitad]*2}
        saldo.textContent='Saldo: '+testeo.toFixed(2);console.log(testeo)
    }
let botonGirar=document.querySelector(".boton-girar")








/*RULETA*/






let divRuleta=document.querySelector(".ruleta-container")
document.addEventListener('DOMContentLoaded', () => {
let listaNumerosRuleta = document.querySelectorAll(".numero");
const anguloPorNumero = 360 / listaNumerosRuleta.length;
const radio = 83; // Radio del círculo en px, ajusta según el tamaño
const contenedor = document.querySelector('.ruleta');
const centroX = divRuleta.clientWidth / 2; // Mitad del ancho del contenedor
const centroY = divRuleta.clientHeight / 2; // Mitad del alto del contenedor

// Posiciona los números alrededor del centro de la ruleta
listaNumerosRuleta.forEach((numero, i) => {
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




/*pelota y numero aleatorio */


let pelota=document.querySelector(".pelota")
let contenedorPelota=document.querySelector(".contenedor-pelota")
function acomodarPelota(){
    const radianes = 1 * Math.PI / 180;
    const radio = 83; // Radio del círculo en px, ajusta según el tamaño    
    const centroX = divRuleta.clientWidth / 2; // Mitad del ancho del contenedor
    const centroY = divRuleta.clientHeight / 2; // Mitad del alto del contenedor
    const x = centroX + radio * Math.cos(radianes)-15;
    const y = centroY + radio * Math.sin(radianes)-15;

    pelota.style.left = `${x}px`;
    pelota.style.top = `${y}px`;

    contenedorPelota.removeChild(pelota)
    
}
let activo=0
acomodarPelota()
let anguloTotalPelota = 0;
let eventoGirar
let contadorVueltas=0
let aleatorio=0
let pelotaRuleta=document.querySelector(".pelota-ruleta")



function girarPelota() {
    activo=1
    anguloTotalPelota += 1;
    contenedorPelota=document.querySelector(".contenedor-pelota")
    contenedorPelota.style.transform = `rotate(${anguloTotalPelota}deg)`;
    contadorVueltas+=1
    if(contadorVueltas>aleatorio){
        clearInterval(eventoGirar)
        contadorVueltas=0
        activo=0
        
        let listaNumerosRuleta = document.querySelectorAll(".numero");
        let almacenadoNumeroCercano=100
        let almacenadoElementoCercano
        for(x of listaNumerosRuleta){
            let distanciaActual=Math.abs(x.getBoundingClientRect().x - pelota.getBoundingClientRect().x)+Math.abs(x.getBoundingClientRect().y - pelota.getBoundingClientRect().y);
            if(distanciaActual<almacenadoNumeroCercano){
                almacenadoNumeroCercano=distanciaActual
                almacenadoElementoCercano=x
            }
        }
    almacenadoElementoCercano.appendChild(pelotaRuleta)
    contenedorPelota.removeChild(pelota)
    numeroActual=almacenadoElementoCercano.textContent
    verificarResultado()
    libroApuestas={
        numeros:{
            0:0,
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            6:0,
            7:0,
            8:0,
            9:0,
            10:0,
            11:0,
            12:0,
            13:0,
            14:0,
            15:0,
            16:0,
            17:0,
            18:0,
            19:0,
            20:0,
            21:0,
            22:0,
            23:0,
            24:0,
            25:0,
            26:0,
            27:0,
            28:0,
            29:0,
            30:0,
            31:0,
            32:0,
            33:0,
            34:0,
            35:0,
            36:0,
        },
        docenas:{
            0:0,
            1:0,
            2:0
        },
        tercios:{
            0:0,
            1:0,
            2:0
        },
        par:{
            0:0,
            1:0,
        },
        color:{
            0:0,
            1:0,
        },
        mitad:{
            0:0,
            1:0
        }
    
    }
    }
    
}
const contenedor = document.querySelector('.ruleta');

function buscarPelota(){

    let listaNumerosRuleta = document.querySelectorAll(".numero");
    for(x of listaNumerosRuleta){
        if(x.querySelector('div')){
            
            const transformacion = x.style.transform;
            const inicioNumero = transformacion.indexOf('(');
            const finNumero = transformacion.indexOf(')');
            let angulo = transformacion.substring(inicioNumero+1, finNumero);
            
            anguloTotalPelota=parseInt(angulo)
            contenedorPelota.style.transform = anguloTotalPelota;
            contenedorPelota.appendChild(pelota)
            console.log(contenedorPelota.style.transform)

            x.removeChild(pelotaRuleta)
            
        }
    }
} 
botonGirar.addEventListener("click", () => {
    if(activo==0){
            buscarPelota()
            aleatorio=Math.floor(Math.random() * (1800 - 540)) + 540;
            eventoGirar=setInterval(girarPelota, 5);
    }


});
