const nombre = document.getElementById("nombre_apellido");
const usuario = document.getElementById("usuari@");
const domicilio = document.getElementById("domicilio");
const contrasena = document.getElementById("password");
const confirmar_contrasena = document.getElementById("confirme_password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "";
    let entrar = false;
    parrafo.innerHTML = "";
    if(nombre.value.length < 6){
        warnings += `El nombre no es valido <br>`;  
        entrar = true;
    }
    if(usuario.value.length <6){
        warnings += `La/El usuaria/o no es valida/o <br>`;  
        entrar = true;
    }
    if(contrasena.value.length < 8){
        warnings += `La contraseña no es valida <br>`;  
        entrar = true;
    }
    if(contrasena.value != confirmar_contrasena.value){
        warnings += `Las contraseñas no coinciden <br>`;  
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    } else{
        parrafo.innerHTML = "Enviado";
    }  
});





