let cuadroAlertas = document.getElementById('recuadroAlertas');
let botonEnviar = document.getElementById('botonEnviar');
botonEnviar.addEventListener('click',(event) => {
    event.preventDefault();
    bandera = true; // bandera que indica si el formulario es apto para enviarse. True: apto.
    let inputUsuario = document.getElementById('inputUsuario');
    let inputCorreo = document.getElementById('inputEmail');
    let inputContra = document.getElementById('inputContrasena');
    let inputRepContra = document.getElementById('inputRepContrasena');

    if (inputUsuario.value == "Ana" || inputUsuario.value == "Pepe" || inputUsuario.value == "Pancho"){
        bandera = false;
        let nuevaAlerta = document.createElement('p');
        nuevaAlerta.textContent = "Error. El usuario tiene nombre preexistente no valido.";
        nuevaAlerta.style.color = "red";
        cuadroAlertas.appendChild(nuevaAlerta);
    }else{
        bandera = true;
        // nuevaAlerta.textContent = " ";
    }

    if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(inputCorreo))){
        bandera = false;
        let nuevaAlerta = document.createElement('p');
        nuevaAlerta.textContent = "Error. Mail no valido";
        nuevaAlerta.style.color = "red";
        cuadroAlertas.appendChild(nuevaAlerta);
    }else{
        bandera = true;
        // nuevaAlerta.textContent = " ";
    }

    if(inputContra.value.length < 8){
        bandera = false;
        let nuevaAlerta = document.createElement('p');
        nuevaAlerta.textContent = "Error. Contrasena debe tener longitud minima de 8 caracteres.";
        nuevaAlerta.style.color = "red";
        cuadroAlertas.appendChild(nuevaAlerta);
    }else{
        bandera = true;
        // nuevaAlerta.textContent = " ";
    }

    if(inputRepContra.value != inputContra.value){
        bandera = false;
        let nuevaAlerta = document.createElement('p');
        nuevaAlerta.textContent = "Error. La contrasena debe coincidir en ambos campos.";
        nuevaAlerta.style.color = "red";
        cuadroAlertas.appendChild(nuevaAlerta);
    }else{
        bandera = true;
        // nuevaAlerta.textContent = " ";
    }

    if(bandera){
        console.log('Bandera true');
        // Se envian los datos
    }

});

function muestraAviso(mensaje,color){
    alerta.textContent = mensaje;
    alerta.style.color = color;
}

// Inciso 1

/*

function validacion(e){
    console.log('Entro a validacion');
    e.preventDefault();

    let bandera = true; // bandera logica que indica si las condiciones se cumplieron

    alerta.textContent = '';

    let valorUsuario = document.getElementById('inputUsuario').value;
    
    if(valorUsuario.length < 3){
        muestraAviso("Error. El usuario debe tener longitud minima de 3 caracteres.");
        bandera = false;
    }

    if(valorUsuario == 'Ana' || valorUsuario == 'Pepe' || valorUsuario == 'Pancho'){
        muestraAviso("Error. El usuario tiene nombre preexistente no valido.");
        bandera = False
    }

    let valorMail = document.getElementById('inputEmail').value;
    if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valorMail))){
        muestraAviso("Error. Mail no valido.");
        bandera = false;
    }

    let valorContra = document.getElementById('inputContrasena').value;

    if(valorContra.length < 8){
        muestraAviso("Error. Contrasena debe tener longitud minima de 8 caracteres.");
        bandera = false
    }

    let valorRepContra = document.getElementById('inputRepContrasena').value;

    if(valorRepContra != valorContra){
        muestraAviso("Error. La contrasena debe coincidir en ambos campos.")
        bandera = false;
    }

    if(bandera == false){
        return false;
    }else{
        envioDatos();
    }
}

// Inciso 2 

async function envioDatos(ev){
    ev.preventDefault();
    let formulario = document.getElementById('formulario');
    let datos = new FormData(formulario);

    try{
        let respuesta = await fetch(formulario.action, {
            method: formulario.method,
            body: datos
            });
        if(respuesta.ok) {
            let resultado = await response.json();
            console.log(resultado);
            }
        }
    finally{
        muestraAviso("Los datos se enviaron exitosamente.","green");
    }
}

*/