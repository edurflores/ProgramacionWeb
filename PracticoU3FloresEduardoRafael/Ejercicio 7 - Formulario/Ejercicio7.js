let alerta = document.getElementById('alerta');

let formulario = document.getElementById('formulario');
formulario.addEventListener('submit',validacion);

function muestraAviso(mensaje){
    alerta.textContent = mensaje;
    alerta.style.color = "red";
}

function validacion(e){
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
        this.submit();
    }
}