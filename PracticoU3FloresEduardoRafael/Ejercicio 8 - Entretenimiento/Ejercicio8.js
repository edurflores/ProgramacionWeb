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

let jugadorActivo = 1; // Primer turno es del jugador 1

function poneEnBlanco(){
    arreCajas.forEach((caja) => {
        console.log(caja.innerHTML);
        caja.addEventListener("click",marcaCaja(caja));
    })
}

function inicioJuego(){
    poneEnBlanco();
    aviso.innerHTML = 'Nueva partida iniciada.';
    aviso.style.color = 'green';
    
    let resultados = [false,-1];
    
    while(resultados[0] == false){
        intento();
        if(jugadorActivo == 1){
            marcaCaja();
            jugadorActivo == 2;
        }else{
            marcaCaja();
            jugadorActivo == 1;
        }
        resultados = compruebaFinalJuego();
    }
    if(resultados[0]){ // True: termino el juego
        aviso.innerHTML = 'Juego finalizado. Ganador: ' + resultados[1];
        aviso.style.color = 'green';
    }
}

function marcaCaja(xcaja){ // Retorna true si el jugador marco una caja, false si no lo hizo
    // Comprobar si la caja no esta marcada de antemano
    let bandera = false;
    arreCajas.forEach((caja) => {
        while(bandera == false){
            if(caja.innerHTML == 'X' || caja.innerHTML == 'O'){ // La caja ya esta marcada
                bandera = false;
                aviso.innerHTML = 'La caja ya esta marcada. Reintente con otra.';
                aviso.style.color = "violet";
            }else{ // La caja no esta marcada
                if(nroJugador == 1){
                    xcaja.innerHTML = 'X';
                    xcaja.removeEventListener("click",marcaCaja);
                    aviso.innerHTML = '';
                    bandera = true;
                }else{
                    xcaja.innerHTML = 'O';
                    xcaja.removeEventListener("click",marcaCaja);
                    aviso.innerHTML = '';
                    bandera = true;
                }
            }
        }
        
    })
    return bandera;
}

function intento(){
    aviso.innerHTML = 'Turno del jugador ' + jugadorActivo;
    if(jugadorActivo == 1){
        aviso.style.color = 'blue';
    }else{
        aviso.style.color = 'red';
    }

}

function compruebaFinalJuego(){
    // Funcion que comprueba tras cada turno si se dio la hilera de un solo jugador para declarar un ganador
    let bandera = false; // True: el juego termino, False: el juego continua
    let ganador = -1; // 1: Gano jugador 1, 2: gano jugador 2, -1: No hay ganador, el juego continua, o es empate.

    if(caja11.value == 'X' && caja12.value == 'X' && caja13.value == 'X'){ // XXX en fila 1
        bandera = true;
        ganador = 1;
    }

    if(caja21.value == 'X' && caja21.value == 'X' && caja23.value == 'X'){ // XXX en fila 2
        bandera = true;
        ganador = 1
    }

    if(caja31.value == 'X' && caja32.value == 'X' && caja33.value == 'X'){ // XXX en fila 3
        bandera = true;
        ganador = 1;
    }

    if(caja11.value == 'O' && caja12.value == 'O' && caja13.value == 'O'){ // OOO en fila 1
        bandera = true;
        ganador = 2;
    }

    if(caja21.value == 'O' && caja21.value == 'O' && caja23.value == 'O'){ // OOO en fila 2
        bandera = true;
        ganador = 2
    }

    if(caja31.value == 'O' && caja32.value == 'O' && caja33.value == 'O'){ // OOO en fila 3
        bandera = true;
        ganador = 2;
    }

    if(caja11.value == 'X' && caja21.value == 'X' && caja31.value == 'X'){ /// XXX en columna 1
        bandera = true
        ganador = 1;
    }
    
    if(caja12.value == 'X' && caja22.value == 'X' && caja32.value == 'X'){ /// XXX en columna 2
        bandera = true
        ganador = 1;
    }

    if(caja13.value == 'X' && caja23.value == 'X' && caja33.value == 'X'){ /// XXX en columna 3
        bandera = true
        ganador = 1;
    }

    if(caja11.value == 'O' && caja21.value == 'O' && caja31.value == 'O'){ /// OOO en columna 1
        bandera = true
        ganador = 2;
    }
    
    if(caja12.value == 'O' && caja22.value == 'O' && caja32.value == 'O'){ /// OOO en columna 2
        bandera = true
        ganador = 2;
    }

    if(caja13.value == 'O' && caja23.value == 'O' && caja33.value == 'O'){ /// OOO en columna 3
        bandera = true
        ganador = 2;
    }

    if(caja11.value == 'X' && caja22.value == 'X' && caja33.value == 'X'){ /// XXX en diagonal
        bandera = true
        ganador = 1;
    }

    if(caja11.value == 'O' && caja22.value == 'O' && caja33.value == 'O'){ /// OOO en diagonal
        bandera = true
        ganador = 2;
    }

    if(caja13.value == 'X' && caja22.value == 'X' && caja31.value == 'X'){ /// XXX en diagonal inversa
        bandera = true
        ganador = 1;
    }

    if(caja13.value == 'O' && caja22.value == 'O' && caja31.value == 'O'){ /// OOO en diagonal inversa
        bandera = true
        ganador = 2;
    }

    return [bandera,ganador];
}

