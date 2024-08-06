let testeo=500;
let ultPremio=0
function testear(){
    let apuestaActual=apuesta.textContent
    let premio=0
        testeo-=apuestaActual
        navbar.textContent='Saldo: '+testeo.toFixed(2)
        testeo+=premio
        /*
        aca iria el ver si gano o cuanto gano
        */
        setTimeout(()=>{
            if(premio>0){
                alertaGanador.classList.add("ganada")
                ultPremio=premio
                ultPremio.textContent='$'+premio.toFixed(2)
                navbar.textContent='Saldo: '+testeo.toFixed(2)
            }

        },2000)
        /*ese 2000 varian segun cuanto tarde la rula en sacar un numero*/ 
}
let listaNumeros=Array.from(document.querySelectorAll(".tableta-numero"))


listaNumeros.forEach(function(elemento) {
    elemento.addEventListener("click", function() {
      console.log("Pusiste una ficha en el numero:", listaNumeros.indexOf(elemento));
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
                console.log("pusiste una ficha entre:",listaNumeros[index].innerHTML,"y",index+1)
                /*en realidad las fichas no se van a poner en esos numeros, si no que esos numeros son el indice del numero al que se colocaron las fichas,
                el codigo correcto seria: listaNumeros[index].textcontent, mientras que el que voy a usar en el codigo va a ser el indice*/
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
                }
                else{
                    console.log("pusiste una ficha entre:",listaNumeros[index].innerHTML,"y",listaNumeros[index+12].innerHTML)
                }
            }
        });
    });
}
)


let mitades=Array.from(document.querySelectorAll(".mitad"))

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
        console.log("le pusiste una fichita a:",elemento.textContent)
})
});

document.addEventListener('DOMContentLoaded', () => {
    const ruleta = document.querySelector('.ruleta');

    const flecha = document.getElementById('flecha');
    const mensaje = document.getElementById('mensaje');
    const numeroDeNumeros = 34; // Total de números en la ruleta
    const anguloPorNumero = 360 / numeroDeNumeros;
    const numeros = [];

    // Generar y posicionar números en la ruleta
    for (let i = 1; i <= numeroDeNumeros; i++) {
        const numeroDiv = document.createElement('div');
        numeroDiv.className = 'numero';
        numeroDiv.textContent = i;
        numeros.push(numeroDiv);
        ruleta.appendChild(numeroDiv);
    }

    numeros.forEach((numero, i) => {
        const angulo = i * anguloPorNumero;
        numero.style.transform = `rotate(${angulo}deg) translate(280px) rotate(${-angulo}deg)`;
        numero.style.top = '310px'; // Cambia la posición hacia abajo
        numero.style.left = '350px'; // Cambia la posición hacia la derecha
    });

    document.getElementById('jugar').addEventListener('click', () => {
        const anguloTotal = 360 * 5 + Math.floor(Math.random() * 360); // Gira 5 veces más un ángulo aleatorio
        flecha.style.transition = 'transform 4s cubic-bezier(0.15, 0.85, 0.35, 1)';
        flecha.style.transform = `rotate(${anguloTotal}deg)`;
     


        // Espera a que termine la animación
        setTimeout(() => {
            // Calcular el número en el que se detuvo la flecha
            const anguloDetenido = anguloTotal % 360;
            const index = Math.floor((anguloDetenido + anguloPorNumero / 2) / anguloPorNumero) % numeroDeNumeros;
            const numeroSeleccionado = numeros[index].textContent;

            // Mostrar el mensaje con el número seleccionado
            mensaje.textContent = `¡Ha salido el número ${numeroSeleccionado}!`;
            mensaje.style.display = 'block';
        }, 4000); // Debe coincidir con la duración de la transición
    });
});
