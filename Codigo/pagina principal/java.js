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




const comentariosList = document.getElementById('comentariosList');
function agregarComentario(texto){
    const contenedorDiv=document.createElement("div");

    const otroDiv=document.createElement("div");
    const newImage= document.createElement("img");
        newImage.src="../img/user.png";
        otroDiv.appendChild(newImage);

    const newText= document.createElement("p");
    newText.textContent="@Usuario"
    otroDiv.appendChild(newText);

    newImage.classList.add('perfil2')
    newText.classList='usuarioN'
    
    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario');
    nuevoComentario.textContent = texto;
    contenedorDiv.appendChild(otroDiv)
    contenedorDiv.appendChild(nuevoComentario)
    comentariosList.appendChild(contenedorDiv)
}


let listaDeComentarios=["aaa","bbb","ccc"]//extraer de base de datos

for(x of listaDeComentarios){
    agregarComentario(x)
}



document.getElementById('comentarioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const comentarioInput = document.getElementById('comentarioInput');
    const comentarioTexto = comentarioInput.value;
    
        listaDeComentarios.push(comentarioTexto)//enviar a la base de datos 
        agregarComentario(comentarioTexto)
        document.getElementById('comentarioForm').value=""
});
