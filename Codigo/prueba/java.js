const usuario={
        "saldo":500,
    }

let navbar=document.querySelector(".navbar")
let miSaldo=document.querySelector(".miSaldo")
console.log(miSaldo)
miSaldo.textContent='Saldo: '+usuario.saldo.toFixed(2)
