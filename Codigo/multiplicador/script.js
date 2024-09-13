let limiteDistancia //esta variable almacena el limite 
let tipoTirada //esta variable almacena el tipo de tirada que va a ser en el sentido de que si es mayor a 2, mayor a 10 mayor a 50, o 100.
let historialTiradas=[]
let historialTiradasdiv=document.querySelector(".lista-resultados")
function generarNumero(){
    tipoTirada=Math.floor(Math.random() * (1000 - 0)) + 0;
    
    if(tipoTirada<600){
        if(tipoTirada%2==0){limiteDistancia=Math.random() +1;}
        else{limiteDistancia=1}
    }
    else if(tipoTirada>600&&tipoTirada<800){
        limiteDistancia=Math.random() * (3) +2;
    }
    else if(tipoTirada>800&&tipoTirada<900){
        limiteDistancia=Math.random() * 40 +5;
    }
    else if(tipoTirada>900&&tipoTirada<999){
        limiteDistancia=Math.random() * 49 +50;
    }
    else{
        limiteDistancia=100
    }
    limiteDistancia=limiteDistancia.toFixed(2)
    
}
function agregarListaADiv(elemento){
    let div = document.createElement('div');
    div.textContent=elemento
    if(elemento<2){ div.classList.add("rojo")}
    else if(elemento>=2 && elemento<10){div.classList.add("azul")}
    else if(elemento>=10 && elemento<30){div.classList.add("verde")}
    else if(elemento>=35 && elemento<90){div.classList.add("naranja")}
    else if(elemento>=90){div.classList.add("amarillo")}
    historialTiradasdiv.appendChild(div)
}
for(let i=0;i<10;i++){
    generarNumero()
    historialTiradas.push(limiteDistancia)
    agregarListaADiv(limiteDistancia)
}
console.log(historialTiradas)
let incremento=document.querySelector(".incremento")
let valorActual=1
function cambiarValor(){
    incremento.textContent="x"+valorActual.toFixed(2)
}
let corrida
function aumentar(){

    if(limiteDistancia>1 && valorActual<limiteDistancia){
        //aca iria la animacion corriendo
        valorActual+=0.01
        cambiarValor()
    }
    else if(limiteDistancia==1){
        //aca iria la animacion del susto
        cambiarValor()
        clearInterval(corrida)
    }
    else{
        //aca iria la animacion del susto       
        clearInterval(corrida)

    }
}
function aumentoJuego(){
    valorActual=1
    
    generarNumero()
    corrida=setInterval(aumentar,70)

}


let botonCorrer=document.querySelector(".apostar")
botonCorrer.addEventListener("click",aumentoJuego)
