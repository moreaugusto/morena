const usuario={
        "saldo":500,
    }

let navbar=document.querySelector(".navbar")
let miSaldo=document.querySelector(".miSaldo")
console.log(miSaldo)
miSaldo.textContent='Saldo: '+usuario.saldo.toFixed(2)

let ampliarUsu=document.querySelector("#ampliar-usuario")
let seccionUsu=document.querySelector(".dropdown-content2")
let seccionUsuAmp=document.querySelector(".dropdown-content3")
let cerrarUsu=document.querySelector("#cerrar-usuario")

ampliarUsu.addEventListener('click',()=>{   
    seccionUsuAmp.style.display="inline"
})
cerrarUsu.addEventListener('click',()=>{   
    seccionUsuAmp.style.display="none"
})

function selectImage(img) {
    document.getElementById("profile-picture").src = img.src;
  }
