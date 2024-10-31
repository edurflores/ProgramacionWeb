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

let turnoJugador = document.createElement('p'); // Aviso de que jugador tiene su turno activo

function poneEnBlanco(){
    jugadorActivo = 1;
    arreCajas.forEach((caja) => {
        caja.innerHTML = '';
        caja.style.backgroundColor = "#eef8ff";
    });
    arreCajas.forEach((caja) => {
        caja.removeEventListener("click",marcaCaja);
    })
}

function marcaCaja() {
    let resultados;
    if(this.innerHTML == ''){
        if(jugadorActivo == 1){
            this.innerHTML = 'X';
            this.style.backgroundColor = "#87cefa";
            jugadorActivo = 2; // Actualiza nuevo jugador activo
            resultados = compruebaFinalJuego();
            aviso.innerHTML = '';
            turnoJugador.textContent = 'Turno del jugador ' + jugadorActivo;
            if(jugadorActivo == 1){
                turnoJugador.style.color = 'blue';
                aviso.appendChild(turnoJugador);
            }else{
                turnoJugador.style.color = 'red';
                aviso.appendChild(turnoJugador);
            }
        }else{
            this.innerHTML = 'O';
            this.style.backgroundColor = "#ffb6c1";
            jugadorActivo = 1; // Actualiza nuevo jugador activo
            resultados = compruebaFinalJuego();
            aviso.innerHTML = '';
            turnoJugador.textContent = 'Turno del jugador ' + jugadorActivo;
            if(jugadorActivo == 1){
                turnoJugador.style.color = 'blue';
                aviso.appendChild(turnoJugador);
            }else{
                turnoJugador.style.color = 'red';
                aviso.appendChild(turnoJugador);
            }
        }
    }else{
        let error = document.createElement('p');
        error.textContent = 'Error. Seleccione caja que se encuentre disponible';
        error.style.color = "black";
        aviso.appendChild(error);
    }
    if(resultados[0]){ // True: termino el juego
        aviso.innerHTML = '';
        aviso.innerHTML = 'Juego finalizado. Ganador: Jugador ' + resultados[1];
        aviso.style.color = 'green';
    }
}

function preparaCajas() {
    arreCajas.forEach((caja) => {
        caja.addEventListener("click",marcaCaja);
    });
}

function inicioJuego(){
    let jugadorActivo = 1; // Primer turno es del jugador 1
    poneEnBlanco();
    aviso.innerHTML = 'Nueva partida iniciada.';
    aviso.style.color = 'green';
    preparaCajas();
    turnoJugador.textContent = 'Turno del jugador ' + jugadorActivo;
    if(jugadorActivo == 1){
        turnoJugador.style.color = 'blue';
        aviso.appendChild(turnoJugador);
    }else{
        turnoJugador.style.color = 'red';
        aviso.appendChild(turnoJugador);
        }
}

function compruebaFinalJuego(){
    // Funcion que comprueba tras cada turno si se dio la hilera de un solo jugador para declarar un ganador
    let bandera = false; // True: el juego termino; False: el juego continua
    let ganador = -1; // 1: Gano jugador 1; 2: gano jugador 2; -1: No hay ganador, el juego continua, o es empate.

    if(caja11.innerHTML == 'X' && caja12.innerHTML == 'X' && caja13.innerHTML == 'X'){ // XXX en fila 1
        bandera = true;
        ganador = 1;
    }

    if(caja21.innerHTML == 'X' && caja21.innerHTML == 'X' && caja23.innerHTML == 'X'){ // XXX en fila 2
        bandera = true;
        ganador = 1
    }

    if(caja31.innerHTML == 'X' && caja32.innerHTML == 'X' && caja33.innerHTML == 'X'){ // XXX en fila 3
        bandera = true;
        ganador = 1;
    }

    if(caja11.innerHTML == 'O' && caja12.innerHTML == 'O' && caja13.innerHTML == 'O'){ // OOO en fila 1
        bandera = true;
        ganador = 2;
    }

    if(caja21.innerHTML == 'O' && caja21.innerHTML == 'O' && caja23.innerHTML == 'O'){ // OOO en fila 2
        bandera = true;
        ganador = 2
    }

    if(caja31.innerHTML == 'O' && caja32.innerHTML == 'O' && caja33.innerHTML == 'O'){ // OOO en fila 3
        bandera = true;
        ganador = 2;
    }

    if(caja11.innerHTML == 'X' && caja21.innerHTML == 'X' && caja31.innerHTML == 'X'){ /// XXX en columna 1
        bandera = true
        ganador = 1;
    }
    
    if(caja12.innerHTML == 'X' && caja22.innerHTML == 'X' && caja32.innerHTML == 'X'){ /// XXX en columna 2
        bandera = true
        ganador = 1;
    }

    if(caja13.innerHTML == 'X' && caja23.innerHTML == 'X' && caja33.innerHTML == 'X'){ /// XXX en columna 3
        bandera = true
        ganador = 1;
    }

    if(caja11.innerHTML == 'O' && caja21.innerHTML == 'O' && caja31.innerHTML == 'O'){ /// OOO en columna 1
        bandera = true
        ganador = 2;
    }
    
    if(caja12.innerHTML == 'O' && caja22.innerHTML == 'O' && caja32.innerHTML == 'O'){ /// OOO en columna 2
        bandera = true
        ganador = 2;
    }

    if(caja13.innerHTML == 'O' && caja23.innerHTML == 'O' && caja33.innerHTML == 'O'){ /// OOO en columna 3
        bandera = true
        ganador = 2;
    }

    if(caja11.innerHTML == 'X' && caja22.innerHTML == 'X' && caja33.innerHTML == 'X'){ /// XXX en diagonal
        bandera = true
        ganador = 1;
    }

    if(caja11.innerHTML == 'O' && caja22.innerHTML == 'O' && caja33.innerHTML == 'O'){ /// OOO en diagonal
        bandera = true
        ganador = 2;
    }

    if(caja13.innerHTML == 'X' && caja22.innerHTML == 'X' && caja31.innerHTML == 'X'){ /// XXX en diagonal inversa
        bandera = true
        ganador = 1;
    }

    if(caja13.innerHTML == 'O' && caja22.innerHTML == 'O' && caja31.innerHTML == 'O'){ /// OOO en diagonal inversa
        bandera = true
        ganador = 2;
    }

    return [bandera,ganador];
}

