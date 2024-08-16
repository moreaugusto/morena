const usuario={
       "nombre":"Nombre Usuario",
        "saldo":500,
        "imgPerfil":"../img/bombon.png",
    }

let navbar=document.querySelector(".navbar")
navbar.innerHTML+='<div class="perfil"><img src="'+usuario.imgPerfil+'"></img></div>'
let miSaldo=document.querySelector(".miSaldo")
console.log(miSaldo)
miSaldo.textContent='Saldo: '+usuario.saldo.toFixed(2)