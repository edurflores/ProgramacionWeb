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
    }

    if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(inputCorreo.value))){
        bandera = false;
        let nuevaAlerta = document.createElement('p');
        nuevaAlerta.textContent = "Error. Mail no valido";
        nuevaAlerta.style.color = "red";
        cuadroAlertas.appendChild(nuevaAlerta);
    }

    if(inputContra.value.length < 8){
        bandera = false;
        let nuevaAlerta = document.createElement('p');
        nuevaAlerta.textContent = "Error. Contrasena debe tener longitud minima de 8 caracteres.";
        nuevaAlerta.style.color = "red";
        cuadroAlertas.appendChild(nuevaAlerta);
    }

    if(inputRepContra.value != inputContra.value){
        bandera = false;
        let nuevaAlerta = document.createElement('p');
        nuevaAlerta.textContent = "Error. La contrasena debe coincidir en ambos campos.";
        nuevaAlerta.style.color = "red";
        cuadroAlertas.appendChild(nuevaAlerta);
    }

    if(bandera){
        console.log('Bandera true');
        // Se envian los datos
    }else{
        let nuevaAlerta = document.createElement('p');
        nuevaAlerta.textContent = "Error de validacion. No se enviaron los datos.";
        nuevaAlerta.style.color = "red";
        cuadroAlertas.appendChild(nuevaAlerta);
    }

});

function muestraAviso(mensaje,color){
    alerta.textContent = mensaje;
    alerta.style.color = color;
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