    let testeo=500;
    let ultPremio=0
    let ficha=1
    function testear(){
        let premio=0
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
            let index=parseInt(elemento.textContent)
        console.log("Pusiste una ficha en el numero:", elemento.textContent);
        libroApuestas.numeros[index]+=ficha
        testeo-=ficha

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
                    console.log("pusiste una ficha entre:",listaNumeros[index].innerHTML,"y",listaNumeros[index+1].innerHTML)
                    libroApuestas.numeros[parseInt(listaNumeros[index].innerHTML)]+=ficha/2
                    libroApuestas.numeros[parseInt(listaNumeros[index+1].innerHTML)]+=ficha/2
                    testeo-=ficha
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
                    }
                    else{
                        console.log("pusiste una ficha entre:",listaNumeros[index].innerHTML,"y",listaNumeros[index+12].innerHTML)
                        libroApuestas.numeros[parseInt(listaNumeros[index].innerHTML)]+=ficha/2
                        libroApuestas.numeros[parseInt(listaNumeros[index+12].innerHTML)]+=ficha/2
                        testeo-=ficha
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
            console.log("le pusiste una fichita a:",elemento.textContent)
            libroApuestas.mitad[mitad.indexOf(elemento)]+=ficha
            testeo-=ficha

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
            console.log("le pusiste una fichita a:",elemento.textContent)
            libroApuestas.color[colores.indexOf(elemento)]+=ficha
            testeo-=ficha

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
            console.log("le pusiste una fichita a:",elemento.textContent)
            libroApuestas.par[paridades.indexOf(elemento)]+=ficha
            testeo-=ficha

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
            console.log("le pusiste una fichita a:",docenas.indexOf(elemento))
            libroApuestas.docenas[docenas.indexOf(elemento)]+=ficha
            testeo-=ficha
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
            console.log("le pusiste una fichita a:",elemento.textContent)
            libroApuestas.tercios[tercios.indexOf(elemento)]+=ficha
            testeo-=ficha
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
            console.log("le pusiste una fichita a:",cero.innerHTML)
            libroApuestas.numeros[parseInt(cero.innerHTML)]+=ficha
            testeo-=ficha
            
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
    const libroLimpio=libroApuestas
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
    function girar(){
            let numeroTirada= Math.floor(Math.random() * (36 - 0 + 1)) + 0;
            console.log(numeroTirada)
            numeroActual=numeroTirada
        /*animacion*/
    }
    function verificarResultado(){
            numeroApuesta=ruletaNumero[numeroActual]
            console.log(numeroApuesta)
            if(libroApuestas.numeros[numeroApuesta.numeros]>0){console.log("tus fichas apostadas a docena se multiplican x36!!!")}
            if(libroApuestas.docenas[numeroApuesta.docenas]>0){console.log("tus fichas apostadas a docena se triplican!!!")}
            if(libroApuestas.tercios[numeroApuesta.tercios]>0){console.log("tus fichas apostadas a tercio se triplican!!!")}
            if(libroApuestas.par[numeroApuesta.par]>0){console.log("tus fichas apostadas a pares se duplican!!!")}
            if(libroApuestas.color[numeroApuesta.color]>0){console.log("tus fichas apostadas a colores se duplican!!!")}
            if(libroApuestas.mitad[numeroApuesta.mitad]>0){console.log("tus fichas apostadas a mitades se duplican!!!")}

    }
    let botonGirar=document.querySelector(".boton-girar")
    botonGirar.addEventListener("click",function(){
        girar()
        verificarResultado()
        libroApuestas=libroLimpio
    })
