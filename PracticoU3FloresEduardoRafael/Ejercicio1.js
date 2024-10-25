var nombre = 'Jose Luis'; // Esta variable sera global, su ámbito abarca todo el código

function saludo() {
    var profesor = 'Facundo Recabarren';
    var alumno = 'Eduardo Flores';
    console.log('Hola ' + alumno + ', tu JTP asignado en la comision 2 es ' + profesor);
}

console.log(profesor) // Error. Las variables declaradas con var solo pueden usarse en el ámbito de su función

function despedida() {
    var nota = 9; // Variable var solo puede usarse en esta función. No es reconocida fuera de la misma.
    console.log('Tu nota en el parcial es de ' + nota + 'puntos.');

    {
        let promedio = 8; // Variable let solo tendrá efecto en este bloque {}. Fuera del mismo no es reconocida.
        console.log('Tu promedio es de ',promedio);
    }
    const final = 7 // Constante. Su valor no puede cambiar. Se mantiene igual toda la ejecucion
    console.log('Nota en examen final: ',final);
}

