let caja11 = document.getElementById('caja11');
let caja12 = document.getElementById('caja12');
let caja13 = document.getElementById('caja13');
let caja21 = document.getElementById('caja21');
let caja22 = document.getElementById('caja22');
let caja23 = document.getElementById('caja23');
let caja31 = document.getElementById('caja31');
let caja32 = document.getElementById('caja32');
let caja33 = document.getElementById('caja33');

let arreCajas = [caja11,caja12,caja13,caja21,caja22,caja23,caja31,caja32,caja33];

let botonNuevaPartida = document.getElementById('botonNuevaPartida');
botonNuevaPartida.addEventListener("click",inicioJuego);

let aviso = document.getElementById('aviso');

function poneEnBlanco(){
    arreCajas.forEach((i) => arreCajas[i].textContent = '');
}

function inicioJuego(){
    aviso.innerHTML = 'Nueva partida iniciada.';
    aviso.style.color = 'green';
}

function intento(nroJugador,){
    aviso.innerHTML = 'Turno del jugador ',nroJugador;
    if(nroJugador == 1){
        aviso.style.color = 'blue';
    }
    if(nroJugador == 2){
        aviso.style.color = 'red';
    }

}

function compruebaFinalJuego(){
    // Funcion que comprueba tras cada turno si se dio la hilera de un solo jugador para terminar el juego
    let ganador = -1; // 1: Gano jugador 1, 2: gano jugador 2, -1: No hay ganador, el juego continua, o es empate.
    if(caja11.value == 'X' && caja12.value == 'X' && caja13.value == 'X'){
        bandera = true;
    }

    if(caja21.value == 'X' && caja21.value == 'X' && caja23.value == 'X'){
        
    }

    if(caja31.value == 'X' && caja32.value == 'X' && caja33.value == 'X'){

    }


    return ganador;
}